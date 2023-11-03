import axios from "axios";
const BASE_URL = "https://www.namava.ir/api/v1.0/comments";

async function fetchComment(pageId, pageSize, mediaId = 140274) {
  try {
    const {data} = await axios.get(BASE_URL, {
      params: {
        pi: pageId,
        ps: pageSize,
        mediaId: mediaId,
        profileId: 0,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export default fetchComment;
