export const fetchOffersByStatus = async (userId, status) => {
     const response = await fetch(`api/offer-service/offers/user/${userId}?status=${status}`);
    const offers = await response.json();
    
     const detailedOffers = await Promise.all(offers.map(async (offer) => {
      const companyResponse = await fetch(`api/company-service/companies/${offer.companyId}`);
      const company = await companyResponse.json();
  
      const cargoResponse = await fetch(`api/cargo-service/cargos/${offer.cargoId}`);
      const cargo = await cargoResponse.json();
  
      return {
        ...offer,
        companyName: company.name,
        cargoDescription: cargo.description,
       };
    }));
  
    return detailedOffers;
  };