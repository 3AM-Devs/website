import { TeamMember } from "../types";

export const teamMembers: TeamMember[] = [];

// GitHub usernames to fetch data for
const githubUsernames = [
  "amandevelops",
  "honoursbhaduria",
  "rishav76dev",
  "webdevgeeks",
  "Vishal34sd",
];

// Function to fetch team member data from GitHub
export async function fetchTeamMemberData(
  username: string
): Promise<Partial<TeamMember>> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: "application/vnd.github.v3+json" },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);

    return {
      name: data.name || username,
      username,
      bio: data.bio || "",
      image: data.avatar_url,
      stats: {
        repositories: data.public_repos,
        followers: data.followers,
        following: data.following,
      },
      socials: {
        github: data.html_url,
        twitter: data.twitter_username
          ? `https://twitter.com/${data.twitter_username}`
          : undefined,
        linkedin: undefined,
      },
    };
  } catch (error) {
    console.error(`Error fetching data for ${username}:`, error);
    return { username, name: username };
  }
}

// Function to fetch and add team members
export async function fetchAndAddTeamMembers(): Promise<TeamMember[]> {
  const startingId = teamMembers.length + 1;
  const newMembers: TeamMember[] = [];

  for (let i = 0; i < githubUsernames.length; i++) {
    try {
      const username = githubUsernames[i];
      const memberData = await fetchTeamMemberData(username);

      const newMember: TeamMember = {
        id: startingId + i,
        name: memberData.name || username,
        username,
        role: "Team Member",
        bio: memberData.bio || "",
        image: memberData.image || "",
        stats: memberData.stats || {
          repositories: 0,
          followers: 0,
          following: 0,
        },
        socials: memberData.socials || {
          github: `https://github.com/${username}`,
        },
      };

      newMembers.push(newMember);
    } catch (error) {
      console.error(`Failed to add team member ${githubUsernames[i]}:`, error);
    }
  }

  // console.log(newMembers);

  // Add new members to the team
  teamMembers.push(...newMembers);
  // console.log(teamMembers);
  return newMembers;
}
