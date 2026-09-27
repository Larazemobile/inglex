window.INGLEX_CONTENT = {
  courses: [
    { grade: 1, label: "1.º Primaria", short: "1.º", description: "Primeras palabras y sonidos" },
    { grade: 2, label: "2.º Primaria", short: "2.º", description: "Vocabulario y frases cortas" },
    { grade: 3, label: "3.º Primaria", short: "3.º", description: "Escucha, frases y comprensión" },
    { grade: 4, label: "4.º Primaria", short: "4.º", description: "Conversación y pequeños textos" }
  ],
  themes: [
    { id: "hello", grade: 1, name: "Hello!", emoji: "👋", color: "#ff826c", description: "Saludos y palabras mágicas", words: [
      ["hello", "hola", "👋"], ["goodbye", "adiós", "🙋"], ["please", "por favor", "🙏"], ["thank you", "gracias", "💛"],
      ["yes", "sí", "✅"], ["no", "no", "❌"], ["good morning", "buenos días", "🌅"], ["good night", "buenas noches", "🌙"]
    ]},
    { id: "colours", grade: 1, name: "Colours", emoji: "🌈", color: "#ffd04a", description: "Los colores", words: [
      ["red", "rojo", "🔴"], ["blue", "azul", "🔵"], ["green", "verde", "🟢"], ["yellow", "amarillo", "🟡"],
      ["orange", "naranja", "🟠"], ["purple", "morado", "🟣"], ["pink", "rosa", "🌸"], ["black", "negro", "🖤"], ["white", "blanco", "🤍"]
    ]},
    { id: "numbers", grade: 1, name: "Numbers", emoji: "🔢", color: "#5eb6ee", description: "Números del 1 al 20", words: [
      ["one", "uno", "1️⃣"], ["two", "dos", "2️⃣"], ["three", "tres", "3️⃣"], ["four", "cuatro", "4️⃣"], ["five", "cinco", "5️⃣"],
      ["six", "seis", "6️⃣"], ["seven", "siete", "7️⃣"], ["eight", "ocho", "8️⃣"], ["nine", "nueve", "9️⃣"], ["ten", "diez", "🔟"]
    ]},
    { id: "animals", grade: 2, name: "Animals", emoji: "🦁", color: "#ff9f43", description: "Animales", words: [
      ["dog", "perro", "🐶"], ["cat", "gato", "🐱"], ["bird", "pájaro", "🐦"], ["fish", "pez", "🐟"], ["rabbit", "conejo", "🐰"],
      ["horse", "caballo", "🐴"], ["lion", "león", "🦁"], ["elephant", "elefante", "🐘"], ["monkey", "mono", "🐵"], ["turtle", "tortuga", "🐢"]
    ]},
    { id: "school", grade: 2, name: "School", emoji: "🎒", color: "#8068e8", description: "En el cole", words: [
      ["book", "libro", "📘"], ["pencil", "lápiz", "✏️"], ["backpack", "mochila", "🎒"], ["teacher", "profesor", "🧑‍🏫"], ["desk", "pupitre", "🪑"],
      ["ruler", "regla", "📏"], ["scissors", "tijeras", "✂️"], ["notebook", "cuaderno", "📓"], ["eraser", "goma", "◻️"], ["classroom", "clase", "🏫"]
    ]},
    { id: "family", grade: 2, name: "Family", emoji: "👨‍👩‍👧‍👦", color: "#ff7cad", description: "Mi familia", words: [
      ["mother", "madre", "👩"], ["father", "padre", "👨"], ["sister", "hermana", "👧"], ["brother", "hermano", "👦"], ["grandmother", "abuela", "👵"],
      ["grandfather", "abuelo", "👴"], ["baby", "bebé", "👶"], ["aunt", "tía", "🙋‍♀️"], ["uncle", "tío", "🙋‍♂️"], ["family", "familia", "🏠"]
    ]},
    { id: "routines", grade: 3, name: "My day", emoji: "🪥", color: "#21bda9", description: "Rutinas diarias", words: [
      ["wake up", "despertarse", "⏰"], ["get dressed", "vestirse", "👕"], ["have breakfast", "desayunar", "🥣"], ["go to school", "ir al cole", "🏫"],
      ["have lunch", "comer", "🍽️"], ["do homework", "hacer deberes", "✏️"], ["play", "jugar", "⚽"], ["have dinner", "cenar", "🥗"], ["go to bed", "irse a la cama", "🛏️"]
    ]},
    { id: "food", grade: 3, name: "Food", emoji: "🍎", color: "#65c95f", description: "Comida y bebida", words: [
      ["apple", "manzana", "🍎"], ["banana", "plátano", "🍌"], ["bread", "pan", "🍞"], ["milk", "leche", "🥛"], ["water", "agua", "💧"],
      ["cheese", "queso", "🧀"], ["chicken", "pollo", "🍗"], ["rice", "arroz", "🍚"], ["vegetables", "verduras", "🥦"], ["breakfast", "desayuno", "🥣"]
    ]},
    { id: "clothes", grade: 3, name: "Clothes", emoji: "👕", color: "#ec6f9f", description: "Ropa y descripciones", words: [
      ["shirt", "camisa", "👔"], ["T-shirt", "camiseta", "👕"], ["trousers", "pantalones", "👖"], ["dress", "vestido", "👗"], ["shoes", "zapatos", "👟"],
      ["coat", "abrigo", "🧥"], ["hat", "sombrero", "👒"], ["socks", "calcetines", "🧦"], ["wear", "llevar puesto", "🧍"], ["favourite", "favorito", "⭐"]
    ]},
    { id: "weather", grade: 3, name: "Weather", emoji: "⛅", color: "#60c9d5", description: "El tiempo", words: [
      ["sunny", "soleado", "☀️"], ["rainy", "lluvioso", "🌧️"], ["cloudy", "nublado", "☁️"], ["snowy", "nevado", "❄️"], ["windy", "ventoso", "💨"],
      ["hot", "caluroso", "🥵"], ["cold", "frío", "🥶"], ["warm", "templado", "🙂"], ["storm", "tormenta", "⛈️"], ["rainbow", "arcoíris", "🌈"]
    ]},
    { id: "town", grade: 4, name: "Around town", emoji: "🏙️", color: "#587ee8", description: "Lugares y direcciones", words: [
      ["library", "biblioteca", "📚"], ["supermarket", "supermercado", "🛒"], ["hospital", "hospital", "🏥"], ["park", "parque", "🌳"], ["station", "estación", "🚉"],
      ["next to", "al lado de", "↔️"], ["opposite", "enfrente de", "🔁"], ["between", "entre", "↕️"], ["turn left", "gira a la izquierda", "⬅️"], ["turn right", "gira a la derecha", "➡️"]
    ]},
    { id: "hobbies", grade: 4, name: "Free time", emoji: "🎸", color: "#f07942", description: "Aficiones y habilidades", words: [
      ["play football", "jugar al fútbol", "⚽"], ["ride a bike", "montar en bici", "🚲"], ["read comics", "leer cómics", "📖"], ["play the guitar", "tocar la guitarra", "🎸"],
      ["dance", "bailar", "💃"], ["swim", "nadar", "🏊"], ["draw", "dibujar", "🎨"], ["cook", "cocinar", "🧑‍🍳"], ["can", "poder/saber", "💪"], ["sometimes", "a veces", "🕐"]
    ]},
    { id: "feelings", grade: 4, name: "Feelings", emoji: "😊", color: "#ab6de2", description: "Cómo nos sentimos", words: [
      ["excited", "emocionado", "🤩"], ["worried", "preocupado", "😟"], ["tired", "cansado", "🥱"], ["hungry", "hambriento", "😋"], ["thirsty", "sediento", "🥤"],
      ["angry", "enfadado", "😠"], ["surprised", "sorprendido", "😮"], ["because", "porque", "🔗"], ["today", "hoy", "📅"], ["feel", "sentirse", "💭"]
    ]}
  ],
  sentences: {
    1: [
      ["I am Alex", "Soy Alex"], ["It is red", "Es rojo"], ["I like blue", "Me gusta el azul"], ["The cat is black", "El gato es negro"],
      ["I have two books", "Tengo dos libros"], ["Good morning teacher", "Buenos días, profe"]
    ],
    2: [
      ["This is my family", "Esta es mi familia"], ["My backpack is blue", "Mi mochila es azul"], ["The rabbit is small", "El conejo es pequeño"],
      ["I have a new pencil", "Tengo un lápiz nuevo"], ["My sister likes animals", "A mi hermana le gustan los animales"], ["There are three books", "Hay tres libros"]
    ],
    3: [
      ["I get dressed before breakfast", "Me visto antes del desayuno"], ["My favourite food is rice", "Mi comida favorita es el arroz"],
      ["She is wearing a yellow dress", "Ella lleva un vestido amarillo"], ["It is cloudy and cold today", "Hoy está nublado y hace frío"],
      ["We do our homework after school", "Hacemos los deberes después del cole"], ["He does not like vegetables", "A él no le gustan las verduras"],
      ["What time do you go to bed", "¿A qué hora te acuestas?"], ["I usually play in the afternoon", "Normalmente juego por la tarde"]
    ],
    4: [
      ["The library is opposite the park", "La biblioteca está enfrente del parque"], ["Can you turn left at the station", "¿Puedes girar a la izquierda en la estación?"],
      ["I can swim but I cannot dance", "Sé nadar, pero no sé bailar"], ["She feels excited because it is her birthday", "Está emocionada porque es su cumpleaños"],
      ["We sometimes ride our bikes at the weekend", "A veces montamos en bici el fin de semana"], ["There is a supermarket next to the hospital", "Hay un supermercado al lado del hospital"],
      ["What do you like doing after school", "¿Qué te gusta hacer después del colegio?"], ["I am wearing a coat because it is cold", "Llevo abrigo porque hace frío"]
    ]
  },
  readings: {
    1: [
      { title: "My cat", text: "This is my cat. It is black and white. It has two green eyes. I love my cat.", questions: [
        ["What animal is it?", "A cat", ["A dog", "A cat", "A rabbit"]],
        ["What colours is the cat?", "Black and white", ["Brown", "Black and white", "Orange"]],
        ["How many eyes does it have?", "Two", ["One", "Three", "Two"]]
      ]},
      { title: "At school", text: "I have a red pencil and two blue books. My school bag is green. The teacher says hello.", questions: [
        ["What colour is the pencil?", "Red", ["Blue", "Red", "Green"]],
        ["How many books are there?", "Two", ["Two", "Four", "One"]],
        ["Who says hello?", "The teacher", ["The teacher", "My brother", "The cat"]]
      ]}
    ],
    2: [
      { title: "Ben's family", text: "Ben lives with his mum, dad and little sister. His sister is six. They have a small brown dog called Max.", questions: [
        ["Who is six?", "Ben's sister", ["Ben", "Ben's sister", "Ben's dad"]],
        ["What pet do they have?", "A dog", ["A cat", "A rabbit", "A dog"]],
        ["What colour is Max?", "Brown", ["Black", "Brown", "White"]]
      ]},
      { title: "My classroom", text: "There are twelve desks in my classroom. My pencil case is under my chair. Our teacher has a big map next to the board.", questions: [
        ["How many desks are there?", "Twelve", ["Ten", "Twelve", "Twenty"]],
        ["Where is the pencil case?", "Under the chair", ["On the desk", "Under the chair", "In the bag"]],
        ["What is next to the board?", "A map", ["A window", "A clock", "A map"]]
      ]}
    ],
    3: [
      { title: "Lucy's morning", text: "Lucy gets up at seven o'clock. She has milk and toast for breakfast. Then she puts on her blue jumper and walks to school with her brother.", questions: [
        ["What does Lucy have for breakfast?", "Milk and toast", ["Rice and chicken", "An apple", "Milk and toast"]],
        ["What colour is her jumper?", "Blue", ["Red", "Blue", "Green"]],
        ["Who walks with Lucy?", "Her brother", ["Her teacher", "Her sister", "Her brother"]]
      ]},
      { title: "A rainy day", text: "It is raining today. Tom cannot play football in the park, so he stays at home. He reads a comic and plays a board game with his sister.", questions: [
        ["Why does Tom stay at home?", "Because it is raining", ["Because he is tired", "Because it is raining", "Because it is late"]],
        ["What does he read?", "A comic", ["A comic", "A letter", "A school book"]],
        ["Who plays with Tom?", "His sister", ["His friend", "His father", "His sister"]]
      ]}
    ],
    4: [
      { title: "The new library", text: "Mia wants to visit the new library. It is between the supermarket and the sports centre. She turns right at the station and walks past the park. The library opens at ten o'clock.", questions: [
        ["Where is the library?", "Between the supermarket and the sports centre", ["Opposite the station", "Between the supermarket and the sports centre", "Inside the park"]],
        ["Where does Mia turn right?", "At the station", ["At the station", "At the park", "At the hospital"]],
        ["When does the library open?", "At ten o'clock", ["At nine o'clock", "At half past ten", "At ten o'clock"]]
      ]},
      { title: "Sam's Saturday", text: "Sam usually plays basketball on Saturday morning, but today he is helping his grandfather in the garden. In the afternoon, they are going to cook lunch together. Sam is happy because he loves cooking.", questions: [
        ["What does Sam usually do?", "He plays basketball", ["He plays basketball", "He cooks breakfast", "He rides a horse"]],
        ["Who is Sam helping?", "His grandfather", ["His teacher", "His grandfather", "His brother"]],
        ["Why is Sam happy?", "Because he loves cooking", ["Because it is Saturday", "Because he loves cooking", "Because he has a new ball"]]
      ]}
    ]
  }
};

window.INGLEX_CONTENT.themes.forEach(function (theme) {
  theme.words = theme.words.map(function (word) {
    return { en: word[0], es: word[1], emoji: word[2] };
  });
});
