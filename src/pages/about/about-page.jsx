import React from "react";
import styles from './about-page.module.css';
import ArticleBlock from "../../components/article-block/article-block";
import atricleImage from '../../images/article-image.png';
import PageWrap from "../../components/page-wrap/page-wrap";

function AboutPage() {

  const articleText1 = 'На картинке справа — знаменитая кривая Эббингауза. В своей работе, написанной еще в 1885 году, Эббингауз исследовал "чистую память", то есть память, на которую не влияют процессы осознанного мышления. С целью эксперимента он заучивал бессмысленные слоги из двух согласных и одной гласной буквы. Выборка производилась так, чтобы ни сам слог, ни их порядок не вызывали у испытуемого ассоциаций. Из графика, отражающего результаты исследований, видно, что забывание усвоенного материала идет очень быстро уже в течение первого часа. То есть, повторять материал сразу перед экзаменом — вредно! Есть риск, что вы вообще ничего не вспомните, еще и растерявшись в стрессовой обстановке. Эббингауз показал: в течение первого часа люди забывают 60% информации. Это больше половины, тогда как за следующие 10 часов теряется всего 5% информации. Постепенно процесс забывания замедляется и через 6-7 дней в памяти остается 1/5 материала. Как же вернуть остальные 80%?'
  const atricleTitle1 = '«Кривая Эббингауза» и успехи в английском'

  const articleText2 = 'При разговоре о методе интервальных повторений сразу возникает ассоциация с интервальными тренировками и упражнениями — безусловными составляющими спортивной подготовки. Смысл их заключается в чередовании этапов занятия с низкой нагрузкой и этапов, которые требуют серьезных усилий. Такая технология заметно сокращает время тренировки, но качество занятия заметно возрастает. Мозг, конечно, не мышца, но тоже нуждается в регулярных тренировках. Весь секрет — в выборе правильного интервала между тренировками. Согласно методу, лучше всего мы вспоминаем, когда вот-вот готовы полностью забыть. Парадокс, но это работает.'
  const atricleTitle2 = 'Метод интервальных повторений для изучения английских слов' 

  return (
    <PageWrap title='About methods'>
      <ul className={styles.articlesList}>
        <li className={styles.element}>
          <ArticleBlock text={articleText1} title={atricleTitle1} image={atricleImage} />
        </li>
        <li className={styles.element}>
          <ArticleBlock text={articleText2} title={atricleTitle2} />
        </li>
      </ul>
      <ul className={styles.frameList}>
        <li className={styles.frame}>
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/eVajQPuRmk8"
            frameBorder="0"
            allow="fullscreen"
          />
        </li>
        <li className={styles.frame}>
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/cVf38y07cfk"
            frameBorder="0"
            allow="fullscreen"
          />
        </li>
        
        </ul>
    </PageWrap>
        
  )
}

export default AboutPage;
