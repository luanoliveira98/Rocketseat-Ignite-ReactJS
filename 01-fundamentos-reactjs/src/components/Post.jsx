import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/luanoliveira98.png" />
          <div className={styles.authorInfo}>
            <strong>Luan Oliveira</strong>
            <span>Web Developer</span>
          </div>

          <time title="6 de março às 16:50h" dateTime="2023-03-06 16:50:45">Publicado há 1h</time>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}