import { NextApiRequest, NextApiResponse } from 'next';
import Dish from '../../backend/models/dish-model';
import { connectToDB } from '../../helpers/backend-helpers/db-helper';
/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

async function handler(req, res) {
  try {
    connectToDB();
    console.log('connected to DB');

    await Dish.create({
      _id: 'salad-bong-cai-xanh',
      category: 'Khai vị',
      name: 'Salad bông cải xanh',
      cost: 20000,
      price: 35000,
      energy: 50,
      description:
        'Món có hương vị nhẹ nhàng, cay nồng, màu sắc hấp dẫn rất thích hợp cho bữa sáng tràn đầy năng lượng cho cả gia đình. Bông cải là nguyên liệu giàu sắt, protein, canxi, crom, carbohydrate, vitamin A và vitamin C. Bên cạnh đó, nó có nhiều chất chống lão hóa như vitamin C, E và beta-carotene, giàu chất xơ, giúp giảm nguy cơ ung thư.',
      ingredients:
        'Bông cải xanh, cà rốt, củ cải đỏ, hạnh nhân, vừng trắng',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-bong-cai-xanh/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-bong-cai-xanh/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-bong-cai-xanh/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'salad-ca-hoi-rong-nho',
      category: 'Khai vị',
      name: 'Salad cá hồi rong nho',
      cost: 25000,
      price: 40000,
      energy: 45,
      description:
        'Rong nho là một nguyên liệu tươi ngon cung cấp chất xơ với cảm giác giòn giòn khi ăn, đã dần trở thành nguyên liệu quen thuộc với các gia đình ưa chuộng các món ăn Nhật Bản. Một loại thực phẩm cung cấp nhiều chất dinh dưỡng khác nữa là cá hồi, được biết đến là nguồn thực phẩm chứa nhiều chất béo Omega-3 giàu EPA và DHA rất tốt cho tim mạch, não bộ, thị giác.',
      ingredients:
        'Cá hồi, rong nho tươi, bắp cải tím, bắp cải trắng, cam, chanh,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-ca-hoi-rong-nho/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-ca-hoi-rong-nho/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-ca-hoi-rong-nho/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'salad-bo-ca-hoi',
      category: 'Khai vị',
      name: 'Salad bơ cá hồi',
      cost: 15000,
      price: 40000,
      energy: 65,
      description:
        'Salad bơ vốn là món ăn quen thuộc và ưa thích của nhiều người, nay kết hợp cùng cá hồi vừa tăng thêm hương vị, vừa bổ sung thêm những dưỡng chất khác tốt cho sức khoẻ. Chắc chắn sẽ làm hài lòng bất kỳ ai thưởng thức đấy.',
      ingredients:
        'Cá hồi, trái bơ, củ cải đường, cà chua bi, dưa leo, xà lách, chanh,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-bo-ca-hoi/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-bo-ca-hoi/2.jpg'
      ]
    });
    await Dish.create({
      _id: 'bap-cai-cuon',
      category: 'Khai vị',
      name: 'Bắp cải cuộn',
      cost: 10000,
      price: 25000,
      energy: 30,
      description:
        'Món có hương vị nhẹ nhàng, cay nồng, màu sắc hấp dẫn rất thích hợp cho bữa sáng tràn đầy năng lượng cho cả gia đình. Bông cải là nguyên liệu giàu sắt, protein, canxi, crom, carbohydrate, vitamin A và vitamin C. Bên cạnh đó, nó có nhiều chất chống lão hóa như vitamin C, E và beta-carotene, giàu chất xơ, giúp giảm nguy cơ ung thư.',
      ingredients:
        'Cải bắp, miến, cà rốt, mộc nhĩ, thịt ức gà, mù tạt,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/bap-cai-cuon/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/bap-cai-cuon/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/bap-cai-cuon/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'goi-rau-ma-tai-heo',
      category: 'Khai vị',
      name: 'Gỏi rau má tai heo',
      cost: 35000,
      price: 70000,
      energy: 75,
      description:
        'Rau má thơm mát, thanh thanh. Tai heo dai giòn, thấm vị chua ngọt, mằn mặn, hài hòa cùng xốt beo béo, đây là một món ăn được nhiều người yêu thích bởi hương vị thơm ngon và rất giàu chất xơ',
      ingredients:
        'Tai heo, rau má, nấm kim châm, cà rốt, ớt sừng, rau răm,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/goi-rau-ma-tai-heo/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/goi-rau-ma-tai-heo/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/goi-rau-ma-tai-heo/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'sup-khoai-tay-vien-nhan-thit',
      category: 'Khai vị',
      name: 'Súp khoai tây viên nhân thịt',
      cost: 30000,
      price: 50000,
      energy: 55,
      description:
        'Súp khoai tây viên nhân thịt không những rất ngon mà còn bổ dưỡng mang lại nhiều lợi ích cho sức khoẻ. Hương vị bánh dẻo bùi, cùng nhân thịt đậm đà. Ăn một lần nhớ mãi không quên.',
      ingredients:
        'Thịt heo xay, xương heo, khoai tây, bột nếp, rau mùi, hành tím,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/sup-khoai-tay-vien-nhan-thit/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/sup-khoai-tay-vien-nhan-thit/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/sup-khoai-tay-vien-nhan-thit/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'dau-hu-cha-bong-trung-bac-thao',
      category: 'Khai vị',
      name: 'Đậu hũ chà bông trứng bắc thảo',
      cost: 20000,
      price: 35000,
      energy: 50,
      description:
        'Đậu hũ trứng bắc thảo dùng ăn cùng cơm trắng. Đậu hũ trứng chiên vàng, kết hợp cùng trứng bắc thảo bùi bùi, béo béo, ăn kèm chà bông và rưới sốt mỡ hành trên cùng!',
      ingredients:
        'Đậu hũ non, bột bắp, trứng bắc thảo, chà bông,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/dau-hu-cha-bong-trung-bac-thao/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/dau-hu-cha-bong-trung-bac-thao/2.jpg'
      ]
    });
    await Dish.create({
      _id: 'sup-hai-san-tuyet-yen',
      category: 'Khai vị',
      name: 'Súp hải sản tuyết yến',
      cost: 60000,
      price: 115000,
      energy: 50,
      description:
        'Súp hải sản tuyết yến là món ăn hấp dẫn, đầy dưỡng chất, khi ăn ta cảm nhận được ngay vị ngọt của nấm đông cô, nấm đông trùng hạ thảo và thịt cua, giòn của sò điệp.',
      ingredients:
        'Cồi sò điệp, càng cua, táo đỏ, nấm đông cô, tuyến yến,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/sup-hai-san-tuyet-yen/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/sup-hai-san-tuyet-yen/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/sup-hai-san-tuyet-yen/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'bo-bit-tet-sot-tieu-den',
      category: 'Món chính',
      name: 'Bò bít tết sốt tiêu đen',
      cost: 100000,
      price: 180000,
      energy: 120,
      description:
        'Món bò bít tết vừa chín tới thơm ngon, hấp dẫn kết hợp với sốt tiêu đen hơi cay nồng, là món ăn phổ biến ở các nhà hàng Âu, có hơi hướng sang trọng, thường được trình bày đẹp mắt!',
      ingredients:
        'Thịt bò thăn, tiêu đen, cà chua, rau xà lách, rau mùi, rượu trắng',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bo-bit-tet-sot-tieu-den/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bo-bit-tet-sot-tieu-den/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bo-bit-tet-sot-tieu-den/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'ca-hoi-sot-chanh-day',
      category: 'Món chính',
      name: 'Cá hồi sốt chanh dây',
      cost: 90000,
      price: 170000,
      energy: 110,
      description:
        'Cá hồi sốt chanh leo là một trong những món ăn được chế biến từ cá hồi vô cùng thơm ngon và bổ dưỡng. Là món ăn mang hương vị của ẩm thực châu Âu, miếng cá hồi béo ngậy, thơm giòn được tẩm ướp kĩ càng hòa quyện cùng nước sốt chanh leo chua chua ngọt ngọt thanh thanh.',
      ingredients:
        'Cá hồi, chanh dây, măng tây, bột năng, rượu trắng,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/ca-hoi-sot-chanh-day/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/ca-hoi-sot-chanh-day/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/ca-hoi-sot-chanh-day/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'bo-nuong-xien-rau-cu',
      category: 'Món chính',
      name: 'Bò nướng xiên rau củ',
      cost: 120000,
      price: 200000,
      energy: 120,
      description:
        'Là món ăn hội tụ nhiều hương vị chỉ trong một xiên thịt, vừa có vị mềm ngọt của thịt bò vừa có vị giòn the của ớt chuông, hành tây, vị bùi của khoai tây và vị chua thanh của cà chua bi. Thịt bò được ướp vừa phải để có hương vị đậm đà thơm ngon mà vẫn giữ được sự mềm ngọt tự nhiên từ bên trong',
      ingredients:
        'Thịt bò, nấm rơm, ớt chuông, ớt sừng, cà rốt, hành tây, cà chua...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bo-nuong-xien-rau-cu/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bo-nuong-xien-rau-cu/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bo-nuong-xien-rau-cu/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'canh-bong-cai-xanh',
      category: 'Món chính',
      name: 'Canh bông cải xanh',
      cost: 50000,
      price: 80000,
      energy: 40,
      description:
        'Món canh vô cùng thơm ngon, bổ dưỡng này rồi. Khi ăn, bạn sẽ cảm nhận được mùi thơm hấp dẫn của sườn non cùng vị giòn giòn, sần sần của bông cải xanh.',
      ingredients:
        'Bông cải xanh, cà rốt, xương má heo, hành, ngò,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/canh-bong-cai-xanh/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/canh-bong-cai-xanh/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/canh-bong-cai-xanh/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'cai-thia-xao-nam',
      category: 'Món chính',
      name: 'Cải thìa xào nấm',
      cost: 30000,
      price: 50000,
      energy: 120,
      description:
        'Cải thìa xào nấm đông cô cùng với hai nguyên liệu đơn giản nhưng lại thơm ngon không tưởng và dồi dào dinh dưỡng!',
      ingredients: 'Cải thìa, dầu thực vật, nấm đông cô, tỏi băm,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/cai-thia-xao-nam/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/cai-thia-xao-nam/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/cai-thia-xao-nam/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'cu-cai-trang-nhoi-thit',
      category: 'Món chính',
      name: 'Củ cải trắng nhồi thịt',
      cost: 30000,
      price: 45000,
      energy: 20,
      description:
        'Món ăn thanh mát, đơn giản nhưng cũng không kém phần đậm đà, ngon miệng và đẹp mắt!',
      ingredients:
        'Củ cải trắng lớn, thịt xay, hành lá, dầu thực vật, tỏi,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/cu-cai-trang-nhoi-thit/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/cu-cai-trang-nhoi-thit/2.jpg'
      ]
    });
    await Dish.create({
      _id: 'suon-xao-chua-ngot-me-xi-muoi',
      category: 'Món chính',
      name: 'Sườn xào chua ngọt me xí muội',
      cost: 100000,
      price: 180000,
      energy: 100,
      description:
        'Sườn xào chua ngọt là món ăn quen thuộc với mọi nhà, món ăn này rất được lòng nhiều người bởi hương vị đậm đà, dễ ăn với nước mắm chua ngọt hấp dẫn, thịt mềm ngọt.',
      ingredients:
        'Sườn thăn non, me chua, bột năng, lòng trắng trứng gà, xí muội,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/suon-xao-chua-ngot-me-xi-muoi/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/suon-xao-chua-ngot-me-xi-muoi/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/suon-xao-chua-ngot-me-xi-muoi/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'bong-bi-xao-tom',
      category: 'Món chính',
      name: 'Bông bí xào tôm',
      cost: 80000,
      price: 160000,
      energy: 90,
      description:
        'Bông bí giòn ngọt xào với tôm nõn là món ăn cơm, bổ sung rất tốt nhiều vitamin và chất xơ cho cho cơ thể. Tôm giòn ngọt, xào cùng bông bí tươi ngon là món ăn vừa nhiều màu sắc, vừa dễ ăn.',
      ingredients:
        'Tôm nõn, bông bí, hành tỏi băm, dầu hào, tiêu xay,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bong-bi-xao-tom/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bong-bi-xao-tom/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bong-bi-xao-tom/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'mien-xao-long-ga',
      category: 'Món chính',
      name: 'Miến xào lòng gà',
      cost: 100000,
      price: 180000,
      energy: 120,
      description:
        'Miến xào lòng gà là món ăn đơn giản, truyền thống của ẩm thực Việt Nam, mang đến hương vị thơm ngon và hấp dẫn. hững sợi miến dai dai, trong trong đẹp mắt ăn cùng lòng gà giòn sần sật, thêm nấm, mộc nhĩ, cà rốt, hành tây… rất ngon mà không hề bị ngán',
      ingredients:
        'Miến dong, lòng gà, nấm hương khô, hành tây, cà rốt, tỏi,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/mien-xao-long-ga/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/mien-xao-long-ga/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/mien-xao-long-ga/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'ga-nau-nam',
      category: 'Món chính',
      name: 'Gà nấu nấm',
      cost: 80000,
      price: 150000,
      energy: 100,
      description:
        'Gà nấu nấm là một món thơm ngon và bổ dưỡng được nhiều người yêu thích, là sự kết hợp của thịt gà mềm, béo với hương vị đậm đà, thanh mát của nấm.',
      ingredients:
        'Thịt gà, nấm rơm, nấm hương, bột năng, hành lá, rau mùi,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/ga-nau-nam/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/ga-nau-nam/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/ga-nau-nam/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'che-dau-do',
      category: 'Tráng miệng',
      name: 'Chè đậu đỏ',
      cost: 20000,
      price: 35000,
      energy: 80,
      description:
        'Chè đậu đỏ - thức quà tráng miệng cực ngon là món ăn giải khát được nhiều người yêu thích. Không chỉ là một món quà vặt, chè đậu đỏ còn chứa rất nhiều chất dinh dưỡng rất tốt cho sức khoẻ.',
      ingredients:
        'Đậu đỏ, đường thốt nốt, đường trắng, bột báng, bột năng, lá dứa, nước dừa.',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-dau-do/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-dau-do/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-dau-do/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'che-khoai-deo',
      category: 'Tráng miệng',
      name: 'Chè khoai dẻo',
      cost: 20000,
      price: 35000,
      energy: 70,
      description:
        'Chè khoai dẻo là món ăn có nguồn gốc từ Đài Loan, sau khi du nhập vào nước ta thì đã trở thành món ăn yêu thích của rất nhiều người, bởi hương vị thơm ngon và tốt cho sức khoẻ',
      ingredients:
        'Khoai lang, bột năng, đường trắng, nước dừa, vừng rang,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-khoai-deo/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-khoai-deo/2.jpg'
      ]
    });
    await Dish.create({
      _id: 'che-hat-sen-long-nhan',
      category: 'Tráng miệng',
      name: 'Chè hạt sen long nhãn',
      cost: 20000,
      price: 35000,
      energy: 80,
      description:
        'Hạt sen ngả vàng như một nhuỵ hoa, điểm xuyết trên nền trắng trong của thịt vải. Bát chè hạt sen mang gam màu dịu nhẹ nhưng hài hòa và thanh khiết.',
      ingredients:
        'Hạt sen tươi, nhãn tươi, đường phèn, muối hạt, bột năng, bột sắn dây.',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-hat-sen-long-nhan/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-hat-sen-long-nhan/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-hat-sen-long-nhan/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'che-nhan-nhuc',
      category: 'Tráng miệng',
      name: 'Chè nhãn nhục',
      cost: 25000,
      price: 40000,
      energy: 90,
      description:
        'Chè nhãn nhục mát lạnh có vị ngọt thanh cực kỳ thơm ngon, món chè bổ dưỡng này được rất nhiều người ưa dùng để giải nhiệt mỗi khi tiết trời oi bức',
      ingredients: 'Bột rau câu, nhãn nhục, phổ tai, đường phèn,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-nhan-nhuc/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/che-nhan-nhuc/2.jpg'
      ]
    });
    await Dish.create({
      _id: 'banh-chuoi-hap',
      category: 'Tráng miệng',
      name: 'Bánh chuối hấp',
      cost: 30000,
      price: 45000,
      energy: 75,
      description:
        'Món bánh chuối hấp là sự kết hợp của chuối sứ thơm với bột năng và nước cốt dừa. Miếng bánh dẻo dai, bùi thơm, ăn mãi không ngán.',
      ingredients:
        'Chuối sứ chín, đường thốt nốt, bột năng, nước cốt dừa, muối, vanilla.',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/desserts/banh-chuoi-hap/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/banh-chuoi-hap/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/banh-chuoi-hap/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'banh-trung-nuong-pho-mai',
      category: 'Tráng miệng',
      name: 'Bánh trứng nướng phô mai',
      cost: 40000,
      price: 70000,
      energy: 100,
      description:
        'Bánh trứng nướng phô mai là món tráng miệng được rất nhiều người yêu thích, không chỉ bởi hương vị mềm mịn, tan chảy trong miệng vô cùng hấp dẫn mà nó còn rất tốt cho sức khoẻ chúng ta nhờ nguồn dinh dưỡng dồi dào.',
      ingredients:
        'Trứng gà, sữa tươi không đường, đường, bột bắp, phô mai',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/desserts/banh-trung-nuong-pho-mai/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/banh-trung-nuong-pho-mai/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/banh-trung-nuong-pho-mai/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'banh-nep-bi-do',
      category: 'Tráng miệng',
      name: 'Bánh nếp bí đỏ',
      cost: 20000,
      price: 35000,
      energy: 80,
      description:
        'Bánh nếp bí đỏ  nay đã vô cùng nổi tiếng bởi vẻ bề ngoài bắt mắt, hương vị hấp dẫn, bí đỏ dẻo thơm, mềm mại với lớp vỏ ngoài vàng ươm hấp dẫn.',
      ingredients:
        'Bí đỏ, bột gạo, bột nếp, đậu xanh, đường, muối, cơm dừa, vừng rang,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/desserts/banh-nep-bi-do/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/banh-nep-bi-do/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/desserts/banh-nep-bi-do/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'sinh-to-bo',
      category: 'Thức uống',
      name: 'Sinh tố bơ',
      cost: 20000,
      price: 35000,
      energy: 80,
      description:
        'Điểm đặc biệt của quả bơ so với những loại trái cây khác là nó chứa nhiều chất béo lành mạnh, khác với chất béo không lành mạnh trong các loại đồ ăn nhanh. Chính vì vậy mà sinh tố có vị béo ngậy đặc trưng.',
      ingredients:
        'Quả bơ, sữa đặc, đường trắng, sữa tươi không đường',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/drinks/sinh-to-bo/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/sinh-to-bo/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/sinh-to-bo/3.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/sinh-to-bo/4.jpg'
      ]
    });
    await Dish.create({
      _id: 'sinh-to-dua-hau',
      category: 'Thức uống',
      name: 'Sinh tố dưa hấu',
      cost: 20000,
      price: 35000,
      energy: 45,
      description:
        'Sinh tốt dưa hấu tốt cho tim mạch và đôi mắt nhờ thành phần lycopene, citrulline và các khoáng chất khác giúp ngăn ngừa thoái hóa điểm vàng do tuổi tác và làm đẹp da.',
      ingredients: 'Dưa hấu, sữa tươi không đường, sữa đặc.',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/drinks/sinh-to-dua-hau/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/sinh-to-dua-hau/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/sinh-to-dua-hau/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'tra-sen-vang',
      category: 'Thức uống',
      name: 'Trà sen vàng',
      cost: 40000,
      price: 70000,
      energy: 60,
      description:
        'Trà sen vàng là thức uống có vị thanh mát, thơm bùi nhờ sự kết hợp độc đáo giữa hạt sen, củ năng, milk foam và trà ô long',
      ingredients:
        'Trà ô long túi lọc, hạt sen tươi, kem béo, đường, củ năng, sữa tươi',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/drinks/tra-sen-vang/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/tra-sen-vang/2.jpg'
      ]
    });
    await Dish.create({
      _id: 'nuoc-chanh-day',
      category: 'Thức uống',
      name: 'Nước chanh dây',
      cost: 20000,
      price: 35000,
      energy: 45,
      description:
        'Nước chanh dây có rất nhiều lợi ích cho sức khoẻ và thường được chọn làm nguyên liệu cho các món bánh, món giải khát nhờ hương vị thơm, ngon, chua chua đặc trưng.',
      ingredients: 'Chanh dây, đường, muối,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/drinks/nuoc-chanh-day/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/nuoc-chanh-day/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/nuoc-chanh-day/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'nuoc-tao-ep',
      category: 'Thức uống',
      name: 'Nước táo ép',
      cost: 25000,
      price: 40000,
      energy: 50,
      description:
        'Nước ép táo là một cách tuyệt vời để bổ sung lượng vitamin C và các chất chống oxy hóa khác cũng như kali bằng các công thức tự làm tốt nhất tại nhà dưới đây. Những chất dinh dưỡng quan trọng cho thấy những tác động có lợi cho sức khoẻ đối với cơ thể của bạn nếu được hấp thụ một cách hiệu quả.',
      ingredients: 'Táo, gừng, mật ông, bạc hà.',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/drinks/nuoc-tao-ep/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/nuoc-tao-ep/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/nuoc-tao-ep/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'tra-lai-hat-dac-thom',
      category: 'Thức uống',
      name: 'Trà lài hạt đác thơm',
      cost: 20000,
      price: 35000,
      energy: 45,
      description:
        'Trà lài đác thơm là sự kết hợp đầy thú vị giữa trà xanh lài, nước ép dứa và hạt đác rim dẻo dai mang đến một thức uống giải khát tuyệt vời với hương thơm đặc trưng.',
      ingredients:
        'Trà xanh lài, nước thơm ép, hạt đác tươi, nước đường, thơm',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/drinks/tra-lai-hat-dac-thom/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/tra-lai-hat-dac-thom/2.jpg'
      ]
    });
    await Dish.create({
      _id: 'sinh-to-chanh-tuyet',
      category: 'Thức uống',
      name: 'Sinh tố chanh tuyết',
      cost: 20000,
      price: 35000,
      energy: 45,
      description:
        'Sinh tố chanh tuyết chứa rất nhiều Vitamin C bổ sung cho cơ thể, giúp ai đang thiếu Vitamin này hãy bổ sung ngay và nó còn điều trị mệt mỏi do cúm hoặc sau bệnh, tăng sức đề kháng cơ thể, mau lành vết thương.',
      ingredients:
        'Nước đường, nước cốt chanh, đá viên, sữa đặc, sữa tươi không đường',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/drinks/sinh-to-chanh-tuyet/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/sinh-to-chanh-tuyet/2.jpg'
      ]
    });
    await Dish.create({
      _id: 'tra-dao',
      category: 'Thức uống',
      name: 'Trà đào',
      cost: 35000,
      price: 70000,
      energy: 50,
      description:
        'Trà đào là thức uống giải nhiệt được nhiều người yêu thích bởi vị chua chua, ngọt ngọt kèm thêm miếng đào ngâm tươi giòn giòn khiến bạn uống hoài không chán.',
      ingredients: 'Đào tươi, đường, nước, nước cốt chanh, muối.',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/drinks/tra-dao/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/tra-dao/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/drinks/tra-dao/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'sup-cua-trung-bac-thao',
      category: 'Khai vị',
      name: 'Súp cua trứng bắc thảo',
      cost: 20000,
      price: 35000,
      energy: 80,
      description:
        'Súp cua món súp dễ chế biến, không chỉ đơn thuần là món ăn lót dạ, súp cua thực sự bổ dưỡng, chứa nhiều đạm và can-xi kết hợp với hương vị thơm ngon của trứng bắc thảo chắc chắn sẽ làm hài lòng tất cả mọi người!',
      ingredients:
        'Thịt cua, nước xương hầm, bắp, thịt ức gà, nấm đông cô, trứng bắc thảo, trứng cút,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/sup-cua-trung-bac-thao/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/sup-cua-trung-bac-thao/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/sup-cua-trung-bac-thao/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'salad-trai-thom-mayo',
      category: 'Khai vị',
      name: 'Salad trái thơm mayo',
      cost: 15000,
      price: 35000,
      energy: 60,
      description:
        'Salad là một món ăn giàu dinh dưỡng lại đa dạng mùi vị và vô cùng thơm ngon. Salad trái thơm mayo có vẻ ngoài đẹp mắt hấp dẫn, hương vị chua ngọt thơm ngon lại vô cùng giàu dinh dưỡng!',
      ingredients:
        'Thịt bò, trái thơm gọt vỏ, cà chua bi, salad lá giòn, salad Roman, salad tím, hành tây, tỏi băm, sốt mayonnaise,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-trai-thom-mayo/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-trai-thom-mayo/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/appetizers/salad-trai-thom-mayo/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'chan-gio-ham-thuoc-bac',
      category: 'Món chính',
      name: 'Chân giò hầm thuốc Bắc',
      cost: 45000,
      price: 75000,
      energy: 120,
      description:
        'Chân giò hầm thuốc Bắc không chỉ đơn thuần được xem là một món ăn thông thường mà nó là một bài thuốc vừa bổ vừa ngon, nên ăn ngay khi còn nóng để giữ được hương vị thơm ngon và dưỡng chất từ thuốc bắc và chân giò.',
      ingredients:
        'Chân giò heo, gói gia vị thuốc bắc, gừng, mật ông, hạt sen, rau ngải cứu,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/chan-gio-ham-thuoc-bac/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/chan-gio-ham-thuoc-bac/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/chan-gio-ham-thuoc-bac/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'muc-xao-sot-tieu-xanh',
      category: 'Món chính',
      name: 'Mực xào sốt tiêu xanh',
      cost: 45000,
      price: 75000,
      energy: 120,
      description:
        'Mực xào sốt tiêu xanh mang màu sắc bắt mắt của rau củ tươi. Thêm vào đó, món ăn cũng “dậy” lên hương thơm đậm đà của tiêu xanh. Còn chần chờ gì mà không thử ngay một miếng mực giòn óng ánh chút nước sốt sánh mịn. Đảm bảo bạn sẽ thích mê món ăn này ngay khi thưởng thức.',
      ingredients:
        'Mực ống, hành tây, măng tây, trái thơm, cà chua, tiêu xanh, hành lá,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/muc-xao-sot-tieu-xanh/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/muc-xao-sot-tieu-xanh/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/muc-xao-sot-tieu-xanh/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'thit-bo-xao-nam-kim-cham',
      category: 'Món chính',
      name: 'Thịt bò xào nấm kim châm',
      cost: 30000,
      price: 60000,
      energy: 90,
      description:
        'Thịt bò xào nấm kim châm có màu sắc và hương vị hấp dẫn, đặc biệt thịt bò mềm ngọt, không bị dai trong khi nấm kim kim châm chín nhưng không bị nhũn nát và chảy quá nhiều nước.',
      ingredients:
        'Thịt bò, nấm kim châm, hành khô, tỏi, gừng, cà rốt, hành lá,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/thit-bo-xao-nam-kim-cham/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/thit-bo-xao-nam-kim-cham/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/thit-bo-xao-nam-kim-cham/3.jpg'
      ]
    });
    await Dish.create({
      _id: 'bo-cuon-la-que-nuong',
      category: 'Món chính',
      name: 'Bò cuộn lá quế nướng',
      cost: 60000,
      price: 100000,
      energy: 100,
      description:
        'Món bò cuộn lá quế nướng với mùi hương thơm lừng mà bất cứ ai cũng đều muốn thưởng thức. Khi ăn, bạn sẽ cảm nhận được phần thịt ba chỉ xông khói mằn mặn, phần nhân thịt bò ngọt và đậm vị cùng với hương thơm từ lá quế vô cùng hấp dẫn.',
      ingredients:
        'Thịt bò xay, lá quế tây, thịt ba rọi xông khói, phô mai Mozzarella, trứng gà, mật ong,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bo-cuon-la-que-nuong/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/bo-cuon-la-que-nuong/2.jpg'
      ]
    });
    await Dish.create({
      _id: 'ca-hoi-sot-chanh-bo-toi',
      category: 'Món chính',
      name: 'Cá hồi sốt chanh bơ tỏi',
      cost: 70000,
      price: 120000,
      energy: 110,
      description:
        'Món cá hồi sốt chanh bơ tỏi có mùi hương quyến rũ, phần sốt chanh bơ tỏi tuyệt hảo cùng thớ thịt cá hồi thơm thơm, mềm mại và vẫn giữ được độ tươi mới hấp dẫn vốn có. Món ăn này vừa ngon, vừa dinh dưỡng sẽ khiến cả nhà bạn thích mê đó!',
      ingredients:
        'Cá hồi phi lê, tỏi băm, bơ, rau thơm, chanh tươi,...',
      available: true,
      imageUrls: [
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/ca-hoi-sot-chanh-bo-toi/1.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/ca-hoi-sot-chanh-bo-toi/2.jpg',
        'https://ik.imagekit.io/NaturentsCDN/main-dishes/ca-hoi-sot-chanh-bo-toi/3.jpg'
      ]
    });
    res.status(200).json({ message: 'added!' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

export default handler;
