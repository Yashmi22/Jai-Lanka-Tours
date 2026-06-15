import axios from 'axios';

/**
 * Jai Lanka Travel & Tours - Cloudinary Image Upload Service
 * @param {File} file - input වලින් ලැබෙන Image file එක
 * @returns {Promise<string>} - Cloudinary CDN URL එක
 */
export const uploadImageToCloudinary = async (file) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append('file', file);
    
    // 💡 ඔයාගේ Unsigned Preset නම (Screenshot 29 අනුව)
    formData.append('upload_preset', 'nrd6fl9w'); 

    // 💡 ඔයාගේ Cloud Name එක (Screenshot 27 අනුව)
    const CLOUD_NAME = "dcxi1g1zz"; 

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            formData
        );
        
        // සාර්ථකව upload වුණාම ලැබෙන HTTPS සුරක්ෂිත ලින්ක් එක
        return response.data.secure_url; 
    } catch (error) {
        console.error("Jai Lanka Cloudinary Upload Error:", error);
        throw error;
    }
};