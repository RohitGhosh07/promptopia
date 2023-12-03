import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Through Shared Thoughts</span>
    </h1>
    <p className='desc text-center'>

    Promptopia is a versatile platform where users are encouraged to freely express their 💭 thoughts, 🎨 create, and 📝 share a diverse array of creative prompts. ✨
    </p>

    <Feed />
  </section>
);

export default Home;