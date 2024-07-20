import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import ArticlePage from '../Components/articlePage';
import CommentCard from '../Components/commentCard';
import CommentForm from '../Components/commentForm';
import RelatedNews from '../Components/relatedNews';
import Modal from '../Components/modal';
import LoginForm from '../Components/loginForm';

function Article(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [comments, setComments] = useState([])


  useEffect(() => {
    async function fetchLoginStatus() {
      try {
        const response = await axios.get('http://localhost:3000/auth/verify', { withCredentials: true });
        setLoggedIn(response.data.verified);
      } catch (error) {
        console.error('Error verifying login status:', error);
      }
    }

    fetchLoginStatus();
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/comments')
    .then(response =>{
      setComments(response.data)
    })
    .catch(error => console.log(error))
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLoginSuccess = () => {
    setIsModalOpen(false);
    navigate(location.pathname);
  };

  return (
    <main className="container pt-4 flex flex-col lg:flex-row md:gap-4">
      <div className="w-full lg:w-2/3">
        <ArticlePage />
        {loggedIn ? (
          <CommentForm />
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="font-bold p-8">
              <button onClick={openModal} className="text-blue-500 hover:underline">
                Login
              </button> to leave a comment
            </h2>
          </div>
        )}
        <h2 className="text-2xl font-bold text-[#3778c2] pl-4">Comments</h2>
        {
          comments.map(comment => (
            <CommentCard key={comment._id} comment={comment} />
          ))
        }
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <RelatedNews />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Modal>
    </main>
  );
}

export default Article;
