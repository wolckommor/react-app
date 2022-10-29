function ShopCard(props) {
    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Mens minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
      }

    return (
        <div className="wrapper">
            <div className="shopCard">
                <figure className="shopCardImgOne">
                    <img src="https://sun9-1.userapi.com/impg/ORrLqmq3Qb9dhaXXW3uxehinZT0Mh7NjYMmMNA/ZM6cPrSAdhw.jpg?size=1080x1080&quality=95&sign=d832c4f71c7692134536e3f9b356254c&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgTwo">
                    <img src="https://sun9-42.userapi.com/impg/1RvaOgi0Us93Wc7vzp3KHkGTaQbcbqwHep2Bsw/JAD2jbeml2o.jpg?size=640x827&quality=96&sign=5409791281bd4111c35957480fc71b3c&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgThree">
                    <img src="https://sun9-84.userapi.com/impg/Km4Z_uC6xT_t1n-Ls7ZaEddgRyzU2SQ4GChbeA/Rp704ui7dhc.jpg?size=736x1012&quality=96&sign=89af411968930af8b46f3dfc2c8bdfeb&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgFour">
                    <img src="https://sun9-2.userapi.com/impg/TMOYWEIKwI89ZkFEJImcTb6jlrT1T_NRt4YvBw/eRf3wqfTQTs.jpg?size=638x784&quality=96&sign=4d6bb3219fc0c75bdf045496fd85f68c&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgFive">
                    <img src="https://sun9-70.userapi.com/impg/6UubOCvxVOvZ631x7jSKm_ZWWSQdkD0gb3z-cg/HtjOJeU7v_Y.jpg?size=460x604&quality=95&sign=20411363c02b1a3571d377b4f82480ed&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgSix">
                    <img src="https://sun9-69.userapi.com/impg/c854528/v854528006/205079/v6MVZIQCgb4.jpg?size=698x574&quality=96&sign=b346fb1eb2838013629316e699cc28ae&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgSeven">
                    <img src="https://sun9-16.userapi.com/impg/QaPyMXdC6CyMvaF-vegZTfRI1KLomdUxfHbWEQ/RvYTsHM84Vc.jpg?size=1125x813&quality=95&sign=68065c25c9a177e9fd70b0ba5fea7829&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgEight">
                    <img src="https://sun9-6.userapi.com/impg/mMqFgua2T8lAwcd5CTkeNovCEoZfvYqc6iuVIQ/RSvXgVSsLyc.jpg?size=900x822&quality=96&sign=c2e77bb2133cc2701ec1b305bfe0f54b&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgNine">
                    <img src="https://sun9-27.userapi.com/impg/ieNm27hqKkocR584PlsBSVqkjG4vfnT7oa3YMQ/C9bpWOey7D0.jpg?size=1080x1080&quality=95&sign=5f330403050a889df5b948d8023a857f&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgTen">
                    <img src="https://sun9-70.userapi.com/impg/ccUzF1VccAQh9EZnBdsw7LD2pZ2zepEWPLFTKg/J9NZGqZ4bIQ.jpg?size=900x1021&quality=95&sign=6cee63445bb11370ce025a7a83c4164a&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgEleven">
                    <img src="https://sun9-60.userapi.com/impg/1d9KJPR-jsG45T5zhWIRumUmAvdNI3V75CtlRg/bk_0L67UOVM.jpg?size=1280x960&quality=96&sign=80ce7a9687d72273f033346c526798a1&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgTwelve">
                    <img src="https://sun9-79.userapi.com/impg/AtnuU1kYt4H-mpucu8OLCqHA_pZFUnYxnH6NRQ/BeWBaXUhTtc.jpg?size=946x1080&quality=95&sign=9ec913ca1f173e5d95861db58aca325f&type=album" className="shopCardImg" alt="" />
                </figure>
                <figure className="shopCardImgThirteen">
                    <img src="https://sun9-26.userapi.com/impg/HcbnDqW251mWfSiCqt5pQ23mx3GIO8UKrW8tcA/Evo3h7Se2Dg.jpg?size=467x700&quality=95&sign=73bc9b6734f2f6a685c2c55a958cb4a2&type=album" className="shopCardImg" alt="" />
                </figure>
            </div>
        </div>
    )
}

export default ShopCard