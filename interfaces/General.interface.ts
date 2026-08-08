export type MediaType = "IMAGE" | "VIDEO";

export interface Media {
  id: string;
  type: MediaType;
  url: string;
  thumbnailUrl?: string;
  fileName?: string;
  mimeType?: string;
  size?: number;
  createdAt: string;
}
