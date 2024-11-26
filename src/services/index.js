import axios from "axios";

const API_URL = "http://3.7.81.243:3253"; // We can also get them from .env file through process.env

export const fetchFooterDetails = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/api/settings/fetch-frontend-details?id=1`
    );
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error("Failed to fetch footer details");
    }
  } catch (error) {
    console.error("Error fetching footer details:", error);
    return null;
  }
};

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/blog`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const sendContactForm = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/contact/send`, data);
    return response.data;
  } catch (error) {
    console.error("Error sending contact form:", error);
    return null;
  }
};
