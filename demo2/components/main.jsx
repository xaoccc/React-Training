import '../styles/App.css'

export default function Main() {
  return (
    <div class="main">
      <section>
        <h1>Articles</h1>
        <article>
          <header class="main-header">
            <h3>Just Another Day</h3>
            <p class="author">Written by Christina on January 11th</p>
            <p class="contents">This is my second blog entry, and I just wanted to check in on you.
              I published my first article about business blogging in August, 2001.
              You can read it here. Whew. A lot of water under the bridge since then, including 9/11, which happened only a few weeks later.</p>
          </header>
        </article>

        <article>
          <header class="main-header">
            <h3>My First Blog Entry</h3>
            <p class="author">Written by Christina on January 10th</p>
            <p class="contents">I'm so happy to write my first blog entry - yay! I published my first article about business blogging in August, 2001.
              You can read it here. Whew. A lot of water under the bridge since then, including 9/11, which happened only a few weeks later.</p>
          </header>
        </article>
      </section>
    </div>
  )
}




