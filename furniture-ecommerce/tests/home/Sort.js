
this.Sort = $page("Sort Page", {
    select: "img[src='https://www.soulandtables.ae/media/catalog/product/cache/1/small_image/262x190/0dc2d03fe217f8c83829496872af24a0/S/o/Soul-_-Tables---Teak-Sofia-Dining-Chair-without-Armrest-49-49.5-80-68206_2.jpg']",
    select1: "img[src='https://www.soulandtables.ae/media/catalog/product/cache/1/small_image/262x190/0dc2d03fe217f8c83829496872af24a0/S/o/Soul-_-Tables---Teak-Venus-Bench---156-36-45-78138.jpg']",
    select2: "img[src='https://www.soulandtables.ae/media/catalog/product/cache/1/small_image/262x190/0dc2d03fe217f8c83829496872af24a0/S/o/Soul-_-Tables---Teak-Venus-Coffee-Table-Round---85-85-40-77894.jpg']",
    Item: "a[href='https://www.soulandtables.ae/brands-soul-and-tables/teak-sofia-dining-chair-without-armrest-49-49-5-80']",
    sortAs: function () {
      this.select.hover();
      Thread.sleep(2000);
      this.select1.hover();
      Thread.sleep(2000);
      this.select2.hover();
      Thread.sleep(2000);
      this.Item.click();
      Thread.sleep(2000);
      this.Item.click();


      // this.option.click();
    },
  });
  