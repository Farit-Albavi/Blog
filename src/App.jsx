import Header from './components/Header'
import Categories from './components/Categories'
import AddPost from './components/AddPost'
import Aside1 from './components/Aside1'
import PostList from './components/PostList'
function App() {

  return (
    <>
      <Header></Header>
      <div className="m-auto container flex text-white relative top-24 flex-col">
        <Categories></Categories>
        <div className='m-auto flex gap-5'>
          <main className='flex gap-5 flex-col'>
            <AddPost></AddPost>
            <PostList></PostList>
          </main>
          <aside className='hidden md:flex flex-col gap-5'>
            <Aside1 info={'Aqui habra publicidad'}></Aside1>
            <Aside1 info={'Aqui otra funcionalidad'}></Aside1>
          </aside>
        </div>
      </div>
    </>
  )
}

export default App
