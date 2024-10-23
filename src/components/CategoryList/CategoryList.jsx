import SectionHeading from "../SectionHeading/SectionHeading";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryList = () => {
    const categoryCards = [
        {
            id: 1,
            icon: "https://i.postimg.cc/8C2VYc4P/accounts.png",
            title: "Account & Finance",
            availability: "300 Jobs Available"
        },
        {
            id: 2,
            icon: "https://i.postimg.cc/NfsvSW6T/creative.png",
            title: "Creative Design",
            availability: "100+ Jobs Available"
        },
        {
            id: 3,
            icon: "https://i.postimg.cc/zvjZ3jrV/marketing.png",
            title: "Marketing & Sales",
            availability: "150 Jobs Available"
        },
        {
            id: 4,
            icon: "https://i.postimg.cc/5y1WxrDh/chip.png",
            title: "Engineering Job",
            availability: "224 Jobs Available"
        }
    ]
    return (
        <div className="my-10 lg:my-24">
            <SectionHeading heading={"Job Category List"}></SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    categoryCards.map(card => <CategoryCard key={card.id} card={card}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryList;