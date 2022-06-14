import styles from './shipping_payment.module.css'

const ShippingAndPayment = (props) => {
    return (
        <div className={styles.aboutUsContainer}>
            <div>
                <h3><i>Доставка:</i></h3>
                <p>По Украине мы доставляем товар курьерскими  службами: <b>"Интайм"</b>,  <b>"Новая Почта"</b> и др.</p>

                <p><b>"Новая Почта"</b> -  имеет наиболее широкую сеть представительств, грузы весом до 50 кг оценивают в 2% от стоимости груза + 18 грн. оформление наложенного платежа.</p>
            <p><b>"Интайм"</b>  -  имеет более низкие тарифы на доставку грузов, но так же имеет меньше представительств по Украине. Выгодно отправлять грузы до 200 кг (не габаритные до 1 м. куб.). За наложенный платеж  берут 1% от стоимости груза.</p>
            <p><b>Уважаемые коллеги, стоимость доставки в ваш населенный пункт всегда уточняйте в курьерской службе</b>, так как условия доставки и тарифы на перевозку у разных служб разные - сделать это можете на их <b>САЙТАХ</b>.</p>
                <p>Доставка оплачивается клиентом перевозчику как по факту получения товара (наложеным платежом) так и по предоплате.</p>
            <p>Заказывая товар с доставкой по Украине, можно дождаться доставки  " до двери " или забрать товар со склада перевозчика в вашем населенном пункте.</p>
            <p>При доставке заказа курьерской службой " до двери " стоимость доставки увеличивается. Время доставки определяет курьерская служба.</p>
            <p><b>Среднее время доставки заказов  по Украине составляет 1 - 2 рабочих дня с момента оформления заказа.</b></p>
            </div>
            <div>
            <h3><i>Самовывоз:</i></h3>
            <p>Мы предоставляем возможность самостоятельно забрать товар со склада нашего производства в г. Запорожье по адресу: Диагональное шоссе, 7. чтобы забрать товар самостоятельно  -  согласуйте время Вашего визита с представителем компании при оформлении заказа.</p>
            </div>
            <div>
            <h3><i>Оплата:</i></h3>
            <p><i><u>Наличная форма</u>:</i></p>
            <ul class="content_list1">
                <li><p>наложенным платежом при получении заказа в представительстве службы доставки.</p></li>
                <li><p>в офисе компании.</p></li>
            </ul>
            <p><i><u>Безналичная форма</u>:</i></p>
            <ul class="content_list1">
                <li><p>физические лица могут оплатить заказ через кассу любого Банка на территории Украины. Оплата происходит по высланной счет - фактуре или на платежную карту безналичным переводом в банке "Приватбанк". Товар передается в службу доставки после поступления денег на наш расчетный счет.</p></li>
                <li><p>организации могут приобрести товар по безналичному расчету с НДС. Все необходимые документы будут предосталены в процессе оформления и передачи заказа.</p></li>
            </ul>
        </div>
        </div >
    )
}

export default ShippingAndPayment