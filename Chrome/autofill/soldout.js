if($(".product__status--sold-out").length > 0){
  location.reload(true); // Force server reload rather than cache
  console.log("Sold out detected, refreshing...");
}
