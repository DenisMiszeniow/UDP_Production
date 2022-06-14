import styles from './about_us.module.css'

const AboutUs = (props) => {
    return (
        <div className={styles.aboutUsContainer}>
        <div>
            <h3><i>ООО НПП "УКРДЕТАЛЬПРОМ"</i></h3>
				<p><b><u>Наша компания разрабатывает, производит и реализует собственную продукцию с гарантийными обязательствами по всей территории  Украины.</u></b></p>
                
				<p>Основной направленностью производства являются:</p>
				<p>- <u><strong>навесное оборудование для мотоблоков</strong></u> (<strong>грунтозацепы, сцепки, плоскорезы, окучники, картофелекопалки</strong>);</p>
				<p>- <u><strong>навесное оборудование для минитракторов</strong></u> (<strong>плуги, культиваторы, рама дисковой бороны, картофелекопалки</strong>);</p>
				<p>- <u>индивидуальные <strong>изделия из проволки</strong></u> (<strong>корзины, кожухи, защитные сетки, кольца</strong>).</p>
				<p>Техническая база позволяет разрабатывать и производить новое <strong>навесное оборудование к минисельхозтехнике</strong>. У нас есть возможность осуществлять <strong>сварочные, токарные, фрезерные, долбежные, вальцовочные</strong> работы, а также <strong>порезка металла</strong> (гильотина, плазма, лентопильные станки ).</p>
            <p>Мы работаем как с юридическими, так и с физическими лицами  и всегда готовы подобрать наиболее подходящий именно Вам вариант сотрудничества.</p>
            <p><b>Будем рады видеть Вас в числе наших клиентов.</b></p>
        </div>
        </div>
    )
}

export default AboutUs