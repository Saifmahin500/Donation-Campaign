const getStoredDonateCard =() => {
    const storedDonateCard = localStorage.getItem('Donate-Card');
    if(storedDonateCard){
        return JSON.parse(storedDonateCard);
    }
    return [];
}

const saveDonateCard = id => {
    const storedDonateCard = getStoredDonateCard();
    const exists = storedDonateCard.find(cardId => cardId === id);
    if (!exists) {
        storedDonateCard.push(id);
        localStorage.setItem('Donate-Card', JSON.stringify(storedDonateCard))
    }
    

}


export {getStoredDonateCard,saveDonateCard}