import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaFolder } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const BlogGrid = () => {
    const navigate = useNavigate();
    const blogPosts = [
        {
            id: 1,
            title: "Simplifying SNAP Applications in NYC",
            excerpt: "Learn how Empower Zone helps individuals and families navigate the SNAP (food stamps) application process quickly and stress-free.",
            date: "August 1, 2025",
            category: "SNAP",
            image: "https://img.freepik.com/free-photo/happy-young-man-looking-smartphone_23-2148296680.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
            author: "Empower Zone Team"
        },
        {
            id: 2,
            title: "Maximizing Your Cash Assistance Benefits",
            excerpt: "Discover tips and strategies to ensure you receive the full benefits available through NYC's Cash Assistance programs.",
            date: "July 15, 2025",
            category: "Cash Assistance",
            image: "https://img.freepik.com/premium-photo/woman-counting-taxes-table-indoors_392895-15641.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
            author: "Empower Zone Team"
        },
        {
            id: 3,
            title: "WIC Benefits: What You Need to Know",
            excerpt: "A complete guide to applying for WIC benefits, including eligibility, paperwork, and interview preparation.",
            date: "June 30, 2025",
            category: "WIC",
            image: "https://img.freepik.com/premium-photo/happy-couple-recieve-good-news-unfolding-letter-kitchen-while-have-breakfast-home_662046-1796.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
            author: "Empower Zone Team"
        },
        {
            id: 4,
            title: "Medicaid Made Simple",
            excerpt: "Understand the Medicaid application process in NYC and how Empower Zone supports you from start to finish.",
            date: "June 10, 2025",
            category: "Medicaid",
            image: "https://img.freepik.com/premium-photo/midsection-man-using-laptop-table_1048944-16961967.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
            author: "Empower Zone Team"
        },
        {
            id: 5,
            title: "Preparing for Your Benefits Interview",
            excerpt: "Tips and guidance to feel confident and prepared for your SNAP, Cash Assistance, or Medicaid interviews.",
            date: "May 25, 2025",
            category: "Guides",
            image: "https://img.freepik.com/free-photo/three-business-professionals-having-discussion-office_23-2147857318.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
            author: "Empower Zone Team"
        },
        {
            id: 6,
            title: "Top 5 Mistakes to Avoid in Your Benefits Application",
            excerpt: "Learn the most common mistakes applicants make and how to avoid them, ensuring a smoother approval process.",
            date: "May 10, 2025",
            category: "Tips & Advice",
            image: "https://img.freepik.com/premium-photo/concept-satisfaction-good-feedback-rating-customer-review-happy-smile-relax-face-think-positive-assessment-world-mental-health-day-calm-mood-good-mental-health-good-mood_10221-60922.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80",
            author: "Empower Zone Team"
        }
    ];



    const latestPosts = blogPosts.slice(0, 3);
    const categories = [
        { name: "SNAP", count: 10 },
        { name: "Cash Assistance", count: 8 },
        { name: "WIC", count: 6 },
        { name: "Medicaid", count: 5 },
        { name: "Guides", count: 4 },
        { name: "Tips & Advice", count: 3 }
    ];
    const tags = ["SNAP", "Cash Assistance", "WIC", "Medicaid", "Eligibility", "Application Tips", "NYC Resources", "Interviews", "Free Consultation"];


    const Navigate = (post) => {
        navigate(`/blogDetail/${post.id}`, { state: post });
        console.log({ state: post })
    };

    return (
        <div className="container flex flex-col lg:flex-row mx-auto px-4 py-16 gap-8">
            <div className="w-full lg:w-8/12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                            <div className="relative">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="absolute top-4 left-4 bg-[#A48E66] text-white px-3 py-1 rounded text-sm font-medium">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                    <span className="flex items-center mr-3">
                                        <FaCalendarAlt className="mr-1" /> {post.date}
                                    </span>
                                    <span className="flex items-center">
                                        <FaUser className="mr-1" /> {post.author}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    <a href="#">{post.title}</a>
                                </h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <Link onClick={() => Navigate(post)} className="text-[#A48E66] font-medium hover:text-[#766340]">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-4/12 space-y-8">
                <div className="sticky top-10">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <FaSearch className="mr-2" /> Search
                        </h2>
                        <div className="flex">
                            <input type="text" className="w-full px-4 py-2 border rounded-l-lg" placeholder="Search by category..." />
                            <button className="bg-[#A48E66] text-white px-4 py-2 rounded-r-lg">
                                <FaSearch />
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
                        {latestPosts.map(post => (
                            <div key={post.id} className="flex items-center space-x-4 mb-4">
                                <img src={post.image} className="w-16 h-16 object-cover rounded" alt={post.title} />
                                <div>
                                    <h4 className="font-medium hover:text-[#A48E66]">{post.title}</h4>
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <FaCalendarAlt className="mr-1" /> {post.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <FaFolder className="mr-2" /> Categories
                        </h2>
                        <ul>
                            {categories.map((cat, i) => (
                                <li key={i} className="flex justify-between hover:text-[#A48E66]">
                                    <a href="#">{cat.name}</a>
                                    <span className="text-sm bg-gray-200 px-2 rounded-full">{cat.count}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <FaTag className="mr-2" /> Tags
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <a key={i} href="#" className="bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-[#A48E66] hover:text-white">
                                    {tag}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogGrid;