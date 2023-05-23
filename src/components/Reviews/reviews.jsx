import css from '../Reviews/reviews.module.css';
 import { useState, useEffect } from 'react';
 import { useParams } from 'react-router-dom';
 import FetchMovie from 'Servises/servises';
import { Loader } from '../Loader/loader';
import PropTypes from 'prop-types';
 
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {movieId } = useParams();


   useEffect(() => {
     setIsLoading(true);
     const Foo = async id => {
       try {
         const response = await FetchMovie(`movie/${movieId}/reviews`, ``);
                 setReviews(response.results);
       } catch (error) {
         setError({ error });
       } finally {
         setIsLoading(false);
       }
     };
     Foo();
   }, [movieId]);

   return (
     <>
       {error &&  <p>We don't have reviews for this movie</p>}
       {reviews.length === 0 && <p>We don't have reviews for this movie</p>}
       {isLoading ?
         <Loader /> :
         <ul className={css.riviewsList}>
           {reviews.map(({ id, author, content }) => (
             <li key={id}>
               <p>Author: {author}</p>
               <p>{content}</p>
             </li>
           ))}
         </ul>
       }
     </>
   );
 };
export default Reviews;

Reviews.prototype = {
  author: PropTypes.string,
  id: PropTypes.number,
  content: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  reviews: PropTypes.array,
  };