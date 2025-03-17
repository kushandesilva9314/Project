import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const CompanyPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("http://localhost:3001/api/user/posts", { withCredentials: true });
                setPosts(res.data);
            } catch (error) {
                setError("");
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <p className="text-center text-lg">Loading posts...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (posts.length === 0) return null;

    return (
        <div className="flex justify-center">
            {/* Left gray column */}
            <div className="w-1/6 bg-gray-200"></div>
            {/* White middle section */}
            <div className="container mx-auto p-6 max-w-3xl mb-10 bg-white">
                <motion.div 
                    className="flex flex-col gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {posts.map((post) => (
                        <motion.div 
                            key={post._id}
                            className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 border border-gray-200 mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                            {post.image && (
                                <div className="w-full h-72 overflow-hidden rounded-md">
                                    <img 
                                        src={`http://localhost:3001${post.image}`} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <p className="text-gray-600 text-base leading-relaxed">{post.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {/* Right gray column */}
            <div className="w-1/6 bg-gray-200"></div>
        </div>
    );
};

export default CompanyPosts;
