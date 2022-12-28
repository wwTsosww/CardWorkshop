// ส่วนของหน้าแสดงข้อมูลสินค้าเบื้องตนบนหน้าเว็บหลัก
var product = [{
  id: 1,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/b/be/S002_Stage4.webp/revision/latest?cb=20220910072159',
  name: 'Artoria Pendragon',
  price: 7000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Saber'
}, 
{
  id: 2,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/6/6a/S012_Stage4.webp/revision/latest?cb=20220910075506',
  name: 'Gilgamesh',
  price: 1500,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Archer'
}, 
{
  id: 3,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/7/76/S070_Stage4.webp/revision/latest?cb=20220910152643',
  name: 'Scáthach',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Lancer'
},
{
  id: 4,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/2/2d/S118_Stage4.webp/revision/latest?cb=20220911064442',
  name: 'Ozymandias',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Rider'
},
{
  id: 5,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/b/b7/S062_Stage4.webp/revision/latest?cb=20220910130846',
  name: 'Tamamo no Mae',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Caster'
},
{
  id: 6,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/b/b2/S154_Stage4.webp/revision/latest?cb=20220911082512',
  name: 'The Old Man of the Mountain',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Assassin'
},
{
  id: 7,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/0/0e/S247_Stage4.webp/revision/latest?cb=20220917062110',
  name: 'Arjuna (Alter)',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Berserker'
},
{
  id: 8,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/5/53/S059_Stage4.webp/revision/latest?cb=20220910122531',
  name: 'Jeanne dArc',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Ruler'
},
{
  id: 9,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/8/8a/S106_Stage4.webp/revision/latest?cb=20220911061659',
  name: 'Jeanne d Arc(Alter)',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Avenger'
},
{
  id: 10,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/f/f2/S351_Stage4.webp/revision/latest?cb=20220925064944',
  name: 'Archetype: Earth',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'MoonCancer'
},
{
  id: 11,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/4/4c/S167_Stage4.webp/revision/latest?cb=20220911122817',
  name: 'Sesshōin Kiara',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'AlterEgo'
},
{
  id: 12,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/b/bc/S195_Stage4.webp/revision/latest?cb=20220911135622',
  name: 'Abigail Williams',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Foreigner'
},
{
  id: 13,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/4/40/S316_Stage4.webp/revision/latest?cb=20220925055829',
  name: 'Oberon',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Pretender'
},
{
  id: 14,
  img: 'https://static.wikia.nocookie.net/fategrandorder/images/b/b5/S001_Stage4.webp/revision/latest?cb=20220910072106',
  name: 'Mashu Kyrielight',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Shielder'
},
{
  id: 15,
  img: 'Picture/S001A4GIcon.jpg',
  name: 'Tiamat',
  price: 45000,
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
  type: 'Beast'
},



];

$(document).ready(() => {
  var html = '';
  for (let i = 0; i < product.length; i++) {
      html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                  <img class="product-img" src="${product[i].img}" alt="">
                  <p style="font-size: 1.2vw;">${product[i].name}</p>
                  <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
              </div>`;
  }
  $("#productlist").html(html);

})

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
  return x;
}

function searchsomething(elem) {
  var value = $('#'+elem.id).val()
  console.log(value)

  var html = '';
  for (let i = 0; i < product.length; i++) {
      if( product[i].name.includes(value) ) {
          html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                  <img class="product-img" src="${product[i].img}" alt="">
                  <p style="font-size: 1.2vw;">${product[i].name}</p>
                  <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
              </div>`;
      }
  }
  if(html == '') {
      $("#productlist").html(`<p>Not found product</p>`);
  } else {
      $("#productlist").html(html);
  }

}

function searchproduct(param) {
  console.log(param)
  $(".product-items").css('display', 'none')
  if(param == 'all') {
      $(".product-items").css('display', 'block')
  }
  else {
      $("."+param).css('display', 'block')
  }
}

var productindex = 0;
function openProductDetail(index) {
  productindex = index;
  console.log(productindex)
  $("#modalDesc").css('display', 'flex')
  $("#mdd-img").attr('src', product[index].img);
  $("#mdd-name").text(product[index].name)
  $("#mdd-price").text( numberWithCommas(product[index].price) + ' THB')
  $("#mdd-desc").text(product[index].description)
}

function closeModal() {
  $(".modal").css('display','none')
}

var cart = [];
function addtocart() {
  var pass = true;

  for (let i = 0; i < cart.length; i++) {
      if( productindex == cart[i].index ) {
          console.log('found same product')
          cart[i].count++;
          pass = false;
      }
  }

  if(pass) {
      var obj = {
          index: productindex,
          id: product[productindex].id,
          name: product[productindex].name,
          price: product[productindex].price,
          img: product[productindex].img,
          count: 1
      };
      // console.log(obj)
      cart.push(obj)
  }
  console.log(cart)

  Swal.fire({
      icon: 'success',
      title: 'Add ' + product[productindex].name + ' to cart !'
  })
  $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
  $('#modalCart').css('display','flex')
  rendercart();
}

function rendercart() {
  if(cart.length > 0) {
      var html = '';
      for (let i = 0; i < cart.length; i++) {
          html += `<div class="cartlist-items">
                      <div class="cartlist-left">
                          <img src="${cart[i].img}" alt="">
                          <div class="cartlist-detail">
                              <p style="font-size: 1.5vw;">${cart[i].name}</p>
                              <p style="font-size: 1.2vw;">${ numberWithCommas(cart[i].price * cart[i].count) } THB</p>
                          </div>
                      </div>
                      <div class="cartlist-right">
                          <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                          <p id="countitems${i}" style="margin: 0 20px;">${cart[i].count}</p>
                          <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                      </div>
                  </div>`;
      }
      $("#mycart").html(html)
  }
  else {
      $("#mycart").html(`<p>Not found product list</p>`)
  }
}

function deinitems(action, index) {
  if(action == '-') {
      if(cart[index].count > 0) {
          cart[index].count--;
          $("#countitems"+index).text(cart[index].count)

          if(cart[index].count <= 0) {
              Swal.fire({
                  icon: 'warning',
                  title: 'Are you sure to delete?',
                  showConfirmButton: true,
                  showCancelButton: true,
                  confirmButtonText: 'Delete',
                  cancelButtonText: 'Cancel'
              }).then((res) => {
                if(res.isConfirmed) {
                   cart.splice(index, 1) 
                   console.log(cart)
                   rendercart();
                   $("#cartcount").css('display','flex').text(cart.length)
                   
                   if(cart.length <= 0) {
                      $("#cartcount").css('display','none')
                   }
                }  
                else {
                  cart[index].count++;
                  $("#countitems"+index).text(cart[index].count)
                  rendercart();
                }
              })
          }
          rendercart();
      }
      
  }
  else if(action == '+') {
      cart[index].count++;
      $("#countitems"+index).text(cart[index].count)
      rendercart();
  }
}
