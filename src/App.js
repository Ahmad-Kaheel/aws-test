import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Layout from './hocs/Layout';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
export default function App() {
  return (
    <Router >
    <Layout>
      <Routes >
        <Route path = '/' element = {<Blog/>} />
        <Route path = '/category/:category' element = {<Category/>} />
        <Route path = '/blog/:id' element = {<BlogDetail/>} />
      </Routes>
    </Layout>
  </Router>
  );
}
