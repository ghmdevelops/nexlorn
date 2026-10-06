import Layout from './components/Layout/Layout.jsx';
import AutomationPage from './pages/AutomationPage/AutomationPage.jsx';
import BlogIndex from './pages/Blog/BlogIndex.jsx';
import BlogPost from './pages/Blog/BlogPost.jsx';
import CasePage from './pages/CasePage/CasePage.jsx';
import Home from './pages/Home/Home.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import ServicePage from './pages/ServicePage/ServicePage.jsx';
import './App.css';

const PAGES = {
  home: Home,
  service: ServicePage,
  automation: AutomationPage,
  blog: BlogIndex,
  post: BlogPost,
  case: CasePage,
  notFound: NotFound,
};

function App({ route }) {
  const Page = PAGES[route.type];
  return (
    <Layout contactHref={route.type === 'notFound' ? '/#contato' : '#contato'}>
      <Page route={route} />
    </Layout>
  );
}

export default App;
