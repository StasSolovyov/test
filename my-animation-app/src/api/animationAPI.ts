import axios from 'axios';

export const getAnimationData = async (animationName: string) => {
  const response = await axios.get(`/api/animations/${animationName}`);
  return response.data;
};
