import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const Blog = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth.tipo === 'admin' ? <h1>Desde Blog</h1> : <Navigate to={'/utcstudent'} />}
    </>
  )
}

export default Blog