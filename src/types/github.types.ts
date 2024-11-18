export interface Project {
  name: string;
  html_url: string;
  description?: string;
  updated_at: string;
  language: string;
}

export interface Activity {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
  actor: {
    display_login: string;
    avatar_url: string;
  };
}
