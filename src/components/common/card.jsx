export default function Card(props) {
    const {cardData} = props;
    return (
        <a key={cardData.title} href={cardData.href || null}
           className={`${cardData.backgroundColor} ${cardData.boxShadow} 
                                    inline-flex items-center justify-center m-4 rounded-xl
                                    text-2xl text-dark-gray font-extrabold cursor-pointer`}
        >
            <p>{cardData.title}</p>
        </a>
    );
}