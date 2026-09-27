(function (global) {
  "use strict";

  var content = global.INGLEX_CONTENT;
  if (!content || !content.adventures) return;

  function scene(speaker, line, prompt, correct, responseEs, wrong1, wrong2) {
    return { speaker: speaker, line: line, prompt: prompt, correct: correct, responseEs: responseEs, choices: [correct, wrong1, wrong2] };
  }

  function adventure(title, emoji, place, intro, scenes) {
    return { title: title, emoji: emoji, place: place, intro: intro, scenes: scenes };
  }

  function g1Meet(x) {
    return adventure(x[0], x[5], x[6], "Conoce a " + x[1] + " y habla de cosas que os gustan.", [
      scene(x[1], "Hello! My name is " + x[1] + ". What is your name?", "Preséntate.", "My name is Alex", "Me llamo Alex", "It is a pencil", "Good night, cat"),
      scene(x[1], "My favourite colour is " + x[2] + ". What colour do you like?", "Di que te gusta el " + x[3] + ".", "I like " + x[3], "Me gusta el " + x[4], "I have two books", "My name is blue"),
      scene(x[1], "This is my " + x[7] + ". Do you like it?", "Contesta que sí.", "Yes, I do", "Sí, me gusta", "No, I am red", "It is seven")
    ]);
  }

  function g1Find(x) {
    return adventure(x[0], x[5], x[6], "Ayuda a encontrar un animal que se ha perdido.", [
      scene(x[1], "I cannot find my " + x[2] + ".", "¿Qué animal busca?", "A " + x[2], x[7], "A pencil", "A teacher"),
      scene(x[1], "It is " + x[3] + ".", "¿Qué pista da sobre su color?", "It is " + x[3], "Es " + x[4], "It is ten", "It is my sister"),
      scene(x[1], "There it is! Thank you for helping me.", "Responde de forma educada.", "You are welcome", "De nada", "Good morning, book", "I am a rabbit")
    ]);
  }

  function g1Count(x) {
    return adventure(x[0], x[5], x[6], "Cuenta objetos y elige la respuesta correcta.", [
      scene(x[1], "Can you count the " + x[2] + "?", "Cuenta los objetos.", x[3], x[4], x[7], x[8]),
      scene(x[1], "What colour are they?", "Di que son " + x[9] + ".", "They are " + x[10], "Son " + x[9], "They are books", "I am " + x[10]),
      scene(x[1], "Great job!", "¿Qué contestas?", "Thank you", "Gracias", "Good night", "I am five pencils")
    ]);
  }

  function g1Snack(x) {
    return adventure(x[0], x[4], x[5], "Elige algo para comer y beber.", [
      scene(x[1], "Are you hungry?", "Contesta que sí.", "Yes, I am", "Sí", "It is blue", "I have a teacher"),
      scene(x[1], "Would you like " + x[2] + "?", "Acepta la comida.", "Yes, please", "Sí, por favor", "Goodbye apple", "No, I am seven"),
      scene(x[1], "Here is your " + x[3] + ".", "Da las gracias.", "Thank you", "Gracias", "My name is milk", "It is a rabbit")
    ]);
  }

  function g1Routine(x) {
    return adventure(x[0], x[5], x[6], "Completa una pequeña rutina diaria.", [
      scene(x[1], x[2], "¿En qué momento ocurre?", x[3], x[4], "At the zoo", "It is purple"),
      scene(x[1], x[7], "Elige la respuesta que encaja.", x[8], x[9], "I am a banana", "Goodbye, number two"),
      scene(x[1], "Well done. See you tomorrow!", "Despídete.", "Goodbye!", "¡Adiós!", "Good morning at night", "I like teacher")
    ]);
  }

  function g2Lost(x) {
    return adventure(x[0], x[6], x[7], "Busca un objeto perdido usando pistas en inglés.", [
      scene(x[1], "I cannot find my " + x[2] + ".", "¿Qué objeto busca?", "The " + x[2], "El/la " + x[3], "The elephant", "The sandwich"),
      scene(x[1], "It is " + x[4] + ".", "¿De qué color es?", x[4], x[5], "Twelve", "Under the teacher"),
      scene("Friend", "Look! It is " + x[8] + ".", "¿Dónde está?", x[8], x[9], "It is hungry", "It is my grandfather")
    ]);
  }

  function g2Animal(x) {
    return adventure(x[0], x[6], x[7], "Descubre un animal por sus pistas.", [
      scene("Guide", "This animal is " + x[2] + ".", "¿Qué animal puede ser?", x[1], x[8], x[4], x[5]),
      scene("Guide", "It can " + x[3] + ".", "¿Qué sabe hacer?", "It can " + x[3], x[9], "It is a backpack", "It has three pencils"),
      scene("Guide", "Do you like this animal?", "Contesta que sí y di que es tu favorito.", "Yes, it is my favourite", "Sí, es mi favorito", "No, I am a desk", "My teacher can blue")
    ]);
  }

  function g2Family(x) {
    return adventure(x[0], x[6], x[7], "Habla con un familiar sobre sus planes.", [
      scene(x[1], "Hello! I am your " + x[2] + ".", "¿Quién es?", "My " + x[2], x[3], "My classroom", "My pencil"),
      scene(x[1], "I am " + x[4] + " years old.", "¿Qué edad tiene?", x[4], x[5], "Blue", "A rabbit"),
      scene(x[1], "Would you like to " + x[8] + " with me?", "Acepta la invitación.", "Yes, let's go", "Sí, vamos", "It is under the chair", "There are five books")
    ]);
  }

  function g2Birthday(x) {
    return adventure(x[0], x[6], x[7], "Prepara una sorpresa de cumpleaños.", [
      scene(x[1], "It is " + x[2] + "'s birthday today.", "¿Qué se celebra?", "A birthday", "Un cumpleaños", "A school day", "A zoo map"),
      scene(x[1], "We have a " + x[3] + " present.", "¿Cómo es el regalo?", x[3], x[4], "It is twelve", "It is a monkey"),
      scene(x[2], "Thank you for my " + x[5] + "!", "Responde de forma amable.", "You are welcome", "De nada", "Under the desk", "My sister is a book")
    ]);
  }

  function g2Class(x) {
    return adventure(x[0], x[6], x[7], "Sigue las indicaciones en clase.", [
      scene("Teacher", "Please take your " + x[1] + ".", "¿Qué debes coger?", "My " + x[1], x[2], "My lion", "My breakfast"),
      scene("Teacher", "Put it " + x[3] + ".", "¿Dónde debes colocarlo?", x[3], x[4], "It is yellow", "I am nine"),
      scene("Teacher", x[5], "¿Qué contestas?", "Yes, teacher", "Sí, profe", "Good night, rabbit", "There are blue")
    ]);
  }

  function g3Cafe(x) {
    return adventure(x[0], x[6], x[7], "Practica cómo pedir comida y bebida.", [
      scene("Waiter", "Hello. What would you like?", "Pide " + x[1] + ".", "Can I have " + x[2] + ", please?", "¿Me pone " + x[1] + ", por favor?", "I am wearing breakfast", "Turn right at the milk"),
      scene("Waiter", "Would you like something to drink?", "Pide " + x[3] + ".", "I would like " + x[4] + ", please", "Quisiera " + x[3] + ", por favor", "My drink is cloudy", "I go to bed in a glass"),
      scene("Waiter", "Here is your order. Enjoy!", "Responde educadamente.", x[5], "Muchas gracias", "I cannot vegetables", "The café is a coat")
    ]);
  }

  function g3Weather(x) {
    return adventure(x[0], x[6], x[7], "Decide qué hacer según el tiempo.", [
      scene(x[1], "It is " + x[2] + " today.", "¿Qué tiempo hace?", x[2], x[3], "Breakfast", "Homework"),
      scene(x[1], "What should you wear?", "Elige la prenda adecuada.", "I should wear " + x[4], "Debería llevar " + x[5], "I should eat a station", "I should wear some rice"),
      scene(x[1], "Can we " + x[8] + "?", "Elige una respuesta razonable.", x[9], x[10], "The weather is a teacher", "I wear at seven o'clock")
    ]);
  }

  function g3Routine(x) {
    return adventure(x[0], x[6], x[7], "Organiza una rutina y comprende el horario.", [
      scene(x[1], "What time do you " + x[2] + "?", "Elige la hora correcta.", "At " + x[3], "A las " + x[4], "It is windy", "I am wearing rice"),
      scene(x[1], "What do you do after that?", "¿Qué actividad viene después?", "I " + x[5], x[8], "I am purple", "I have a station"),
      scene(x[1], "Do you do that every day?", "Contesta que normalmente sí.", "Yes, I usually do", "Sí, normalmente", "No, it is a T-shirt", "Because I am breakfast")
    ]);
  }

  function g3Shop(x) {
    return adventure(x[0], x[5], x[6], "Pregunta por una prenda en una tienda.", [
      scene("Shop assistant", "Hello. Can I help you?", "Di qué prenda buscas.", "I am looking for " + x[1], "Busco " + x[2], "I am eating a coat", "The shop is rainy"),
      scene("Shop assistant", "What colour would you like?", "Elige el color.", "I would like " + x[3], "Lo quiero " + x[4], "At half past seven", "Next to the breakfast"),
      scene("Shop assistant", "Here it is. Would you like to try it on?", "Contesta que sí.", "Yes, please", "Sí, por favor", "I do my homework", "It is a supermarket")
    ]);
  }

  function g3School(x) {
    return adventure(x[0], x[7], "At school", "Resuelve una pequeña misión del colegio.", [
      scene("Teacher", x[1], "¿Qué tienes que hacer?", x[2], x[3], "Wear some breakfast", "Turn left at the rain"),
      scene("Classmate", x[4], "Elige una respuesta útil.", x[5], x[8], "I am cloudy", "The homework is hungry"),
      scene("Teacher", "Excellent teamwork!", "¿Qué contestáis?", "Thank you, teacher", "Gracias, profe", "We are a supermarket", "Our book is cold today")
    ]);
  }

  function g4Directions(x) {
    return adventure(x[0], x[7], x[8], "Sigue indicaciones para llegar a un lugar.", [
      scene("You", "Excuse me, how can I get to the " + x[1] + "?", "¿Qué lugar estás buscando?", "The " + x[1], x[2], "A yellow dress", "Some breakfast"),
      scene("Neighbour", x[3], "¿Qué debes hacer primero?", x[4], x[5], "Cook some homework", "Feel surprised at lunch"),
      scene("Neighbour", "It is " + x[6] + ".", "¿Dónde está exactamente?", x[6], x[9], "It can swim", "It is wearing a coat")
    ]);
  }

  function g4Plan(x) {
    return adventure(x[0], x[7], x[8], "Organiza un plan para el tiempo libre.", [
      scene(x[1], "Would you like to " + x[2] + " on " + x[3] + "?", "Acepta la invitación.", "Yes, I would love to", "Sí, me encantaría", "The library is thirsty", "I cannot Saturday"),
      scene(x[1], "Let's meet " + x[4] + ".", "¿Dónde habéis quedado?", x[4], x[5], "Because it is sunny", "At my favourite rice"),
      scene(x[1], "I am excited because " + x[6] + ".", "¿Por qué está emocionado/a?", "Because " + x[6], x[9], "Opposite the coat", "Between two breakfasts")
    ]);
  }

  function g4Feeling(x) {
    return adventure(x[0], x[8], "At school", "Comprende cómo se siente alguien y ayúdale.", [
      scene(x[1], "I feel " + x[2] + " because " + x[3] + ".", "¿Cómo se siente?", x[2], x[4], "Opposite", "Sometimes"),
      scene("You", x[5], "Elige una respuesta que ayude.", x[6], x[7], "Turn right at the sandwich", "I am wearing a library"),
      scene(x[1], "Thank you. I feel better now.", "¿Qué ha cambiado?", "They feel better", "Se siente mejor", "The park is closed", "They cannot cook")
    ]);
  }

  function g4Ability(x) {
    return adventure(x[0], x[7], x[8], "Habla sobre aficiones y habilidades.", [
      scene(x[1], "Can you " + x[2] + "?", "Contesta que sí.", "Yes, I can", "Sí, sé hacerlo", "It is opposite the park", "I am surprised because"),
      scene(x[1], "How often do you practise?", "Di que practicas " + x[3] + ".", "I practise " + x[4], "Practico " + x[3], "I practise between", "The station practises me"),
      scene(x[1], "Let's " + x[2] + " together " + x[5] + ".", "Acepta y confirma el momento.", "Great, see you " + x[5], x[6], "I am wearing the hospital", "Because the guitar is opposite")
    ]);
  }

  function g4Errand(x) {
    return adventure(x[0], x[9], x[10], "Completa un recado usando horarios y direcciones.", [
      scene(x[1], "We need to go to the " + x[2] + ".", "¿Adónde vais?", "The " + x[2], x[3], "A worried bicycle", "Some cloudy homework"),
      scene(x[1], "It opens at " + x[4] + ".", "¿A qué hora abre?", x[4], x[5], "Opposite the park", "Because it is cold"),
      scene(x[1], x[6], "¿Qué debes hacer ahora?", x[7], x[8], "Cook the station", "Wear the library")
    ]);
  }

  var extra = {
    1: [
      ["Mia's first day","Mia","red","blue","azul","🖍️","In the classroom","crayon"],
      ["Hello, Leo!","Leo","green","yellow","amarillo","⚽","In the playground","ball"],
      ["A seat for Ruby","Ruby","purple","pink","rosa","📘","At school","book"],
      ["Tom's new toy","Tom","orange","green","verde","🚗","At home","toy car"],
      ["Welcome, Eva","Eva","blue","red","rojo","🎒","At the school gate","backpack"]
    ].map(g1Meet).concat([
      ["Where is Coco?","Lina","bird","blue","azul","🐦","In the garden","Un pájaro"],
      ["Ben's puppy","Ben","dog","brown","marrón","🐶","In the park","Un perro"],
      ["The white rabbit","Sara","rabbit","white","blanco","🐰","On the farm","Un conejo"],
      ["A tiny turtle","Max","turtle","green","verde","🐢","Near the pond","Una tortuga"],
      ["Nina's fish","Nina","fish","orange","naranja","🐟","At home","Un pez"]
    ].map(g1Find)).concat([
      ["Three red apples","Mum","apples","Three","Tres","🍎","In the kitchen","Two","Five","rojas","red"],
      ["Five blue pencils","Teacher","pencils","Five","Cinco","✏️","In the classroom","Four","Eight","azules","blue"],
      ["Two little birds","Grandad","birds","Two","Dos","🐦","In the garden","Six","Ten","amarillos","yellow"],
      ["Four green books","Librarian","books","Four","Cuatro","📚","In the library","One","Nine","verdes","green"],
      ["Seven toy cars","Dad","toy cars","Seven","Siete","🚗","In the bedroom","Three","Ten","naranjas","orange"]
    ].map(g1Count)).concat([
      ["Apple break","Teacher","an apple","water","🍎","At school","En el recreo"],
      ["Banana picnic","Dad","a banana","milk","🍌","In the park","En el parque"],
      ["Bread for breakfast","Mum","some bread","orange juice","🍞","At home","En casa"],
      ["A birthday snack","Aunt","some cake","water","🎂","At a party","En una fiesta"]
    ].map(g1Snack)).concat([
      ["Good morning, Sun!","Mum","Good morning! It is time to wake up.","In the morning","Por la mañana","🌅","At home","Please get dressed.","I put on my clothes","Me pongo la ropa"],
      ["School time","Dad","We take the backpack and leave home.","Before school","Antes del colegio","🏫","At home","Where do we go now?","We go to school","Vamos al colegio"],
      ["Dinner is ready","Mum","It is evening and dinner is ready.","In the evening","Por la tarde-noche","🍽️","In the kitchen","Are you hungry?","Yes, I am","Sí, tengo hambre"],
      ["Good night, Moon!","Dad","The moon is out. It is late.","At night","Por la noche","🌙","In the bedroom","What do you say now?","Good night","Buenas noches"]
    ].map(g1Routine)),

    2: [
      ["The red pencil case","Nora","pencil case","estuche","red","rojo","🖍️","In the classroom","under the chair","debajo de la silla"],
      ["Leo's notebook","Leo","notebook","cuaderno","green","verde","📓","At school","on the teacher's desk","en la mesa del profesor"],
      ["A missing ruler","Amy","ruler","regla","yellow","amarillo","📏","In the library","next to the books","al lado de los libros"],
      ["Where are my scissors?","Sam","scissors","tijeras","blue","azul","✂️","In the art room","inside the backpack","dentro de la mochila"],
      ["The purple lunch box","Ivy","lunch box","fiambrera","purple","morado","🥪","At school","under the desk","debajo del pupitre"]
    ].map(g2Lost).concat([
      ["The tall giraffe","A giraffe","tall and yellow","eat leaves","A rabbit","A fish","🦒","At the zoo","Una jirafa","Puede comer hojas"],
      ["The clever monkey","A monkey","small and brown","climb","An elephant","A turtle","🐵","At the zoo","Un mono","Puede trepar"],
      ["The fast horse","A horse","big and strong","run fast","A fish","A bird","🐴","On the farm","Un caballo","Puede correr rápido"],
      ["The little penguin","A penguin","black and white","swim","A lion","A rabbit","🐧","At the aquarium","Un pingüino","Puede nadar"],
      ["The colourful parrot","A parrot","small and colourful","fly","A turtle","An elephant","🦜","At the bird park","Un loro","Puede volar"]
    ].map(g2Animal)).concat([
      ["An afternoon with Grandma","Grandma","grandmother","Mi abuela","sixty","sesenta","👵","At home","bake a cake"],
      ["Football with Uncle Dan","Uncle Dan","uncle","Mi tío","thirty","treinta","⚽","In the park","play football"],
      ["A story from Grandpa","Grandpa","grandfather","Mi abuelo","seventy","setenta","📖","At home","read a story"],
      ["Painting with Aunt May","Aunt May","aunt","Mi tía","forty","cuarenta","🎨","In the garden","paint a picture"]
    ].map(g2Family)).concat([
      ["Ella's birthday","Mum","Ella","big and red","Grande y rojo","new bicycle","🎁","At home"],
      ["A present for Ben","Dad","Ben","small and blue","Pequeño y azul","toy train","🚂","At a party"],
      ["Ruby turns eight","Sister","Ruby","yellow and round","Amarillo y redondo","ball","🎈","In the garden"],
      ["Max's surprise","Brother","Max","green and funny","Verde y divertido","dinosaur toy","🦖","At home"]
    ].map(g2Birthday)).concat([
      ["Map time","map","Mi mapa","next to the board","Al lado de la pizarra","Are you ready to find Spain?","🗺️","In geography class"],
      ["A page in the book","book","Mi libro","on the desk","Encima del pupitre","Please open it on page ten.","📘","In the classroom"],
      ["Drawing a house","pencil","Mi lápiz","beside the notebook","Junto al cuaderno","Now draw a small house.","✏️","In art class"],
      ["Cut and paste","scissors","Mis tijeras","inside the pencil case","Dentro del estuche","Please cut the blue paper.","✂️","In art class"],
      ["Tidy the classroom","backpack","Mi mochila","under the chair","Debajo de la silla","Please put your books away.","🎒","After class"]
    ].map(g2Class)),

    3: [
      ["Lunch at Green Café","arroz y pollo","rice and chicken","agua","some water","Thank you very much","🍚","At a café"],
      ["A healthy breakfast","cereales y plátano","cereal and a banana","leche","some milk","Thanks! It looks delicious","🥣","At a café"],
      ["The sandwich shop","un sándwich de queso","a cheese sandwich","zumo de naranja","an orange juice","Thank you. Have a nice day","🥪","At a sandwich shop"],
      ["Dinner by the sea","pescado y verduras","fish and vegetables","agua","some water","Thank you very much","🐟","At a restaurant"],
      ["Fruit market snack","una manzana y un plátano","an apple and a banana","zumo","some juice","Thanks for your help","🍎","At the market"]
    ].map(g3Cafe).concat([
      ["A snowy school day","Mum","snowy and very cold","Nevado y muy frío","a warm coat","un abrigo calentito","❄️","Before school","walk to school safely","Yes, but we must be careful","Sí, pero debemos tener cuidado"],
      ["The sunny picnic","Dad","sunny and hot","Soleado y caluroso","a hat","un sombrero","☀️","At home","have a picnic","Yes, the weather is perfect","Sí, hace un tiempo perfecto"],
      ["A windy afternoon","Coach","windy and cool","Ventoso y fresco","a jacket","una chaqueta","💨","After school","play outside","Yes, but wear your jacket","Sí, pero ponte la chaqueta"],
      ["Storm over the park","Sister","stormy and rainy","Tormentoso y lluvioso","a raincoat","un chubasquero","⛈️","At home","go to the park","No, let's stay at home","No, quedémonos en casa"],
      ["Clouds at the beach","Mum","cloudy but warm","Nublado pero templado","a T-shirt","una camiseta","☁️","At the beach","swim in the sea","Yes, the water is warm","Sí, el agua está templada"]
    ].map(g3Weather)).concat([
      ["Lucy's busy morning","Lucy","wake up","seven o'clock","siete","have breakfast","⏰","At home","Desayuno"],
      ["After-school routine","Leo","finish school","half past four","cuatro y media","do my homework","✏️","After school","Hago los deberes"],
      ["Training day","Maya","go to football practice","six o'clock","seis","have dinner","⚽","In the afternoon","Ceno"],
      ["A calm evening","Noah","have dinner","eight o'clock","ocho","read a book","📖","At home","Leo un libro"],
      ["Bedtime plan","Emma","go to bed","nine o'clock","nueve","brush my teeth","🪥","At night","Me lavo los dientes"]
    ].map(g3Routine)).concat([
      ["A coat for winter","a warm coat","un abrigo calentito","blue","azul","🧥","At the clothes shop"],
      ["Shoes for the match","some sports shoes","unas zapatillas deportivas","white","blancas","👟","At the sports shop"],
      ["The party dress","a party dress","un vestido de fiesta","yellow","amarillo","👗","At the clothes shop"],
      ["A T-shirt for Ben","a T-shirt","una camiseta","green","verde","👕","At the clothes shop"]
    ].map(g3Shop)).concat([
      ["The food poster","Please make a poster about healthy food.","Make a healthy food poster","Hacer un cartel de comida saludable","Can I draw fruit and vegetables?","Yes, that is a great idea","Sí, es una idea estupenda","🥦","Puedo dibujar fruta y verdura"],
      ["Weather report","Prepare tomorrow's weather report.","Prepare a weather report","Preparar un parte meteorológico","Should I include the temperature?","Yes, include the temperature too","Sí, incluye también la temperatura","🌦️","Debo incluir la temperatura"],
      ["Our daily routines","Write three sentences about your morning.","Write about my morning","Escribir sobre mi mañana","Can we compare our routines?","Yes, let's work together","Sí, trabajemos juntos","📝","Podemos comparar nuestras rutinas"],
      ["Clothes for every season","Choose suitable clothes for each season.","Match clothes and seasons","Relacionar ropa y estaciones","I will start with winter clothes.","Good idea. I will do summer","Buena idea. Yo haré verano","🧣","Yo empezaré por la ropa de invierno"]
    ].map(g3School)),

    4: [
      ["The science museum","science museum","El museo de ciencias","Go straight and turn right at the station.","Turn right at the station","Girar a la derecha en la estación","next to the library","🔭","Around town","Al lado de la biblioteca"],
      ["Finding the sports centre","sports centre","El polideportivo","Turn left after the supermarket.","Turn left after the supermarket","Girar a la izquierda después del supermercado","opposite the park","🏀","Around town","Enfrente del parque"],
      ["Way to the hospital","hospital","El hospital","Walk past the library and cross the road.","Walk past the library","Pasar de largo la biblioteca","between the bank and the station","🏥","In town","Entre el banco y la estación"],
      ["The new bookshop","bookshop","La librería","Take the second street on the right.","Take the second street on the right","Tomar la segunda calle a la derecha","next to the café","📚","In the town centre","Al lado de la cafetería"],
      ["A train to catch","station","La estación","Go straight ahead and turn left at the traffic lights.","Turn left at the traffic lights","Girar a la izquierda en el semáforo","opposite the hotel","🚉","In town","Enfrente del hotel"]
    ].map(g4Directions).concat([
      ["Saturday on wheels","Mia","ride our bikes","Saturday","next to the sports centre","Al lado del polideportivo","the new cycle path is open","🚲","At school","Porque el nuevo carril bici está abierto"],
      ["A cooking afternoon","Ben","cook lunch together","Sunday","at my house","En mi casa","we can try a new recipe","🧑‍🍳","After school","Porque podemos probar una receta nueva"],
      ["Swimming plans","Ruby","go swimming","Friday","outside the swimming pool","Fuera de la piscina","our friends are coming too","🏊","At school","Porque también vienen nuestros amigos"],
      ["Comic club","Leo","read comics","Wednesday","inside the library","Dentro de la biblioteca","there is a new comic club","📖","At school","Porque hay un club nuevo de cómics"],
      ["Music in the park","Nina","play the guitar","Saturday","near the park entrance","Cerca de la entrada del parque","the school festival is soon","🎸","After class","Porque pronto es el festival del colegio"]
    ].map(g4Plan)).concat([
      ["Before the school play","Maya","worried","I might forget my lines","preocupada","Let's practise together one more time.","That would really help","Eso ayudaría mucho","🎭","Ensayemos juntos una vez más"],
      ["A surprise party","Sam","excited","it is my sister's birthday","emocionado","Shall we decorate the room now?","Yes, let's start with the balloons","Sí, empecemos por los globos","🎈","¿Decoramos ya la habitación?"],
      ["Lost in town","Eva","confused","I cannot find the station","confundida","Let's look at the map together.","Thank you. The map will help","Gracias. El mapa ayudará","🗺️","Miremos juntos el mapa"],
      ["After football practice","Noah","tired","we trained for two hours","cansado","Would you like some water?","Yes, please. I am thirsty too","Sí, por favor. También tengo sed","⚽","¿Quieres un poco de agua?"],
      ["The difficult homework","Lily","frustrated","I do not understand this question","frustrada","I can explain it step by step.","Thanks. Let's solve it together","Gracias. Vamos a resolverlo juntos","📝","Puedo explicarlo paso a paso"]
    ].map(g4Feeling)).concat([
      ["Dance rehearsal","Ivy","dance","twice a week","two times a week","after school","Genial, nos vemos después del colegio","💃","At the dance studio"],
      ["Chess in the library","Max","play chess","every Saturday","every Saturday","at ten o'clock","Genial, nos vemos a las diez","♟️","At school"],
      ["Drawing club","Ella","draw portraits","on Fridays","every Friday","after lunch","Genial, nos vemos después de comer","🎨","In the art room"],
      ["Basketball practice","Tom","play basketball","three times a week","three times a week","tomorrow afternoon","Genial, nos vemos mañana por la tarde","🏀","At the sports centre"]
    ].map(g4Ability)).concat([
      ["Return the library book","Dad","library","La biblioteca","half past nine","nueve y media","We are early, so let's walk through the park.","Walk through the park","Atravesar el parque","📚","On Saturday morning"],
      ["Buy fruit for lunch","Mum","supermarket","El supermercado","ten o'clock","diez","The quickest way is past the station.","Walk past the station","Pasar de largo la estación","🛒","In the morning"],
      ["Collect a train ticket","Uncle","station","La estación","quarter to eleven","once menos cuarto","The ticket office is opposite platform two.","Go to platform two","Ir al andén dos","🎫","At the station"],
      ["Visit Grandpa","Mum","hospital","El hospital","four o'clock","cuatro","His room is on the second floor, next to the lift.","Take the lift to the second floor","Subir en ascensor a la segunda planta","🏥","In the afternoon"]
    ].map(g4Errand))
  };

  Object.keys(extra).forEach(function (grade) {
    content.adventures[grade] = content.adventures[grade].concat(extra[grade]);
    content.adventures[grade].forEach(function (item, index) {
      item.id = "g" + grade + "a" + (index + 1);
    });
  });
})(window);
