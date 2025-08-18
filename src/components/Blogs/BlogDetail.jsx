import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCalendarAlt, FaUser, FaComment } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
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


  const blgpost = blogPosts.find(item => item.id === Number(id));

  useEffect(() => {
    if (!blgpost) {
      navigate("/blogs");
    }
  }, [blgpost, navigate]);

  if (!blgpost) return null;

  const { title, excerpt, category, image, author, date } = blgpost;

  const relatedPosts = blogPosts.slice(0, 2);
  const tags = ["SNAP", "Cash Assistance", "WIC", "Medicaid", "Eligibility", "Application Tips", "NYC Resources", "Interviews", "Free Consultation"];

  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handle = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    const newComment = {
      text: comment,
      date: new Date().toLocaleDateString(),
      likes: 0,
    };

    setCommentsList(prev => [newComment, ...prev]);
    setComment("");
  };

  const handleLike = (index) => {
    setCommentsList(prev =>
      prev.map((cmt, i) =>
        i === index ? { ...cmt, likes: cmt.likes + 1 } : cmt
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-30 px-4 lg:flex gap-8 font-sans">
      {/* Main Content */}
      <div className="w-full lg:w-8/12">
        {/* Breadcrumb */}
        <div className="bg-pink-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">Post Details</h3>
          <p className="text-sm text-gray-500">
            <Link to="/blogs">Blogs</Link> / <span className="text-[#A48E66] ">{title}</span>
          </p>
        </div>

        {/* Blog Title & Meta */}
        <div className="mb-6">
          <span className="inline-block bg-[#a48e6641] text-[#A48E66] px-3 py-1 text-sm font-semibold rounded-full mb-4">{category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1"><FaUser /> {author}</span>
            <span className="flex items-center gap-1"><FaCalendarAlt /> {date}</span>
            <span className="flex items-center gap-1"><FaComment /> {commentsList.length} Comments</span>
          </div>
        </div>

        {/* Featured Image */}
        <img src={image} alt={title} className="rounded-lg mb-6" />

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>{excerpt}</p>
          <p>
            At Empower Zone, we guide individuals and families across NYC through every step of applying for benefits. From paperwork preparation to interview tips, our goal is to make the process simple, fast, and stress-free.
          </p>
          <blockquote className="border-l-4 border-[#A48E66] pl-4 text-[#A48E66]  italic">
            “Navigating benefit applications can be overwhelming, but with the right guidance, you can secure the assistance you need efficiently and confidently.”
          </blockquote>
          <h2 className="text-2xl font-semibold text-gray-900">Our Key Services & Guidance</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 list-disc pl-6 gap-2">
            <li>Assistance with SNAP (food stamps) applications</li>
            <li>Support for Cash Assistance benefits</li>
            <li>Guidance on WIC applications and eligibility</li>
            <li>Help with Medicaid enrollment and paperwork</li>
            <li>Preparation tips for benefit interviews</li>
            <li>Expert advice to avoid common application mistakes</li>
          </ul>
        </div>


        {/* Comment Form */}
        <div className="mt-12 border rounded-lg p-6 bg-white">
          <h3 className="text-2xl font-semibold mb-4">Leave a Reply</h3>
          <form className="space-y-4">
            <textarea
              onChange={handleChange}
              value={comment}
              rows="5"
              className="w-full border rounded-lg p-4"
              placeholder="Comment*"
            />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="border" />
              Save my info for next time
            </label>
            <button onClick={handle} type="submit" className="bg-gradient-to-r text-white from-[#9f8660] to-[#c0b688] transform transition-transform  hover:scale-100  duration-300 shadow-lg shadow-[#a48e66ba] px-6 py-3 rounded-lg">
              See More
            </button>
          </form>
        </div>

        {/* Comments */}
        <div className="my-6 p-3 rounded-md">
          <h1 className="font-bold text-xl mb-4">Recent Comments:</h1>
          {commentsList.map((cmt, index) => (
            <div
              key={index}
              className="border-b pb-4 mb-4"
            >
              <div className="flex justify-between items-start">
                <p className="text-gray-800 w-10/12">{cmt.text}</p>
                <span className="text-sm text-gray-500">{cmt.date}</span>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => handleLike(index)}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600"
                >
                  <CiHeart className="text-xl" />
                  {cmt.likes} likes
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-4/12 mt-12 lg:mt-0">
        <div className="space-y-8 sticky top-10">
          {/* Search */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-4">Search</h3>
            <div className="flex">
              <input type="text" className="flex-1 p-3 border rounded-l-lg" placeholder="Search here..." />
              <button className="bg-gradient-to-r text-white from-[#9f8660] to-[#c0b688] transform  duration-300  px-4 ">Search</button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-4">Latest Posts</h3>
            <ul className="space-y-4">
              {relatedPosts.map((post, idx) => (
                <li key={idx} className="flex gap-3">
                  <img src={post.image} className="w-16 h-16 object-cover rounded" alt={post.title} />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{post.title}</p>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-sm px-3 py-1 rounded-full hover:bg-[#A48E66] hover:text-white transition">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
