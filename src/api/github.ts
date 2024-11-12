import { Project } from '@/types/github.types';
import axios from 'axios';

export async function getRepos(): Promise<Project[] | undefined> {
  try {
    const response = await axios.get(
      'https://api.github.com/users/arenkerr/repos?sort=updated&per_page=5'
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
