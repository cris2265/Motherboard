let componentes = [
    {
        nombre: "CPU",
        img: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/10/CPU_Shutterstock.jpg",
        descripcion: "La Unidad Central de Procesamiento (CPU) es el cerebro del ordenador. Se encarga de ejecutar las instrucciones de los programas, realizar cálculos y procesar datos. Su rendimiento es crucial para la velocidad general del sistema. Existen diferentes tipos de CPUs, como los de núcleos múltiples, que pueden realizar múltiples tareas simultáneamente.",
        categoria: "Chips"  // Asignado a "Chips"
    },
    {
        nombre: "RAM",
        img: "https://png.pngtree.com/png-clipart/20190611/original/pngtree-ram-png-image_2331878.jpg",
        descripcion: "La memoria de acceso aleatorio (RAM) es una memoria volátil que almacena datos temporales mientras el ordenador está en funcionamiento. Proporciona acceso rápido a la información que el CPU necesita para ejecutar tareas. Cuanta más RAM tenga un sistema, más aplicaciones y datos puede manejar simultáneamente sin ralentizarse.",
        categoria: "Chips"  // Asignado a "Chips"
    },
    {
        nombre: "Tarjeta Gráfica",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sapphire-Radeon-HD-5570-Video-Card.jpg/1200px-Sapphire-Radeon-HD-5570-Video-Card.jpg",
        descripcion: "La tarjeta gráfica, o GPU, es responsable de renderizar imágenes y videos en la pantalla. Es esencial para juegos, edición de video y aplicaciones gráficas intensivas. Las tarjetas gráficas modernas también pueden realizar cálculos paralelos para tareas no gráficas, como la inteligencia artificial y el procesamiento de datos.",
        categoria: "Chips"  // Asignado a "Chips"
    },
    {
        nombre: "PSI 1",
        img: "https://i.blogs.es/bd135c/pciexpress/1366_521.jpg",
        descripcion: "Componente personalizado que puede estar relacionado con interfaces de sistema periférico (PSI). Su función puede variar dependiendo del diseño específico del sistema, pero generalmente se utiliza para conectar o comunicar diversos periféricos con el ordenador.",
        categoria: "Ranuras"  // Asignado a "Ranuras"
    },
    {
        nombre: "PSI 2",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Buses_pci.jpg",
        descripcion: "Otro componente personalizado, similar al PSI 1. Su función específica dependerá del contexto del sistema en el que se utilice. Puede estar diseñado para proporcionar funcionalidades adicionales o adaptaciones específicas.",
        categoria: "Ranuras"  // Asignado a "Ranuras"
    },
    {
        nombre: "PSI 3",
        img: "https://i.blogs.es/bd135c/pciexpress/840_560.jpg",
        descripcion: "Similar a los PSI 1 y 2, este componente personalizado puede estar relacionado con interfaces o conexiones específicas dentro de un sistema. Su propósito y uso pueden variar según la configuración del sistema y los requisitos del usuario.",
        categoria: "Ranuras"  // Asignado a "Ranuras"
    },
    {
        nombre: "Disco Duro",
        img: "https://w7.pngwing.com/pngs/331/987/png-transparent-serial-ata-parallel-ata-hard-drives-esata-electrical-cable-usb-electronics-computer-cable.png",
        descripcion: " El disco duro, o SSD (unidad de estado sólido), es el dispositivo de almacenamiento principal del ordenador. Guarda datos de forma permanente, incluyendo el sistema operativo, programas y archivos personales. Los discos duros tradicionales utilizan discos magnéticos giratorios, mientras que los SSD usan memoria flash, ofreciendo tiempos de acceso más rápidos y mayor durabilidad.",
        categoria: "Alimentacion"  // Asignado a "Alimentacion"
    },
    {
        nombre: "Ventiladores",
        img: "https://w7.pngwing.com/pngs/79/11/png-transparent-computer-system-cooling-parts-fan-ebm-papst-molex-connector-ventilation-fan-computer-technic-computer-hardware.png",
        descripcion: "Mantienen la temperatura de los componentes internos, como la CPU y la GPU, en niveles seguros. Un buen sistema de ventilación previene el sobrecalentamiento y puede extender la vida útil de los componentes.",
        categoria: "Disipadores"  // Asignado a "Disipadores"
    },
    {
        nombre: "Fuente de Alimentación",
        img: "https://w7.pngwing.com/pngs/629/520/png-transparent-adapter-power-supply-unit-80-plus-power-converters-atx-others-adapter-cable-electrical-connector.png",
        descripcion: " La fuente de alimentación (PSU) convierte la corriente alterna (AC) de la toma de corriente en corriente continua (DC) que los componentes del ordenador utilizan. Debe proporcionar suficiente potencia para todos los componentes del sistema y tiene protecciones para evitar daños por sobrecarga o cortocircuitos.",
        categoria: "Alimentacion"  // Asignado a "Alimentacion"
    },
    {
        nombre: "Chip",
        img: "https://static.vecteezy.com/system/resources/previews/009/383/731/non_2x/computer-chip-clipart-design-illustration-free-png.png",
        descripcion: "Un chip es un circuito integrado que puede realizar diversas funciones dependiendo de su diseño, como procesamiento o control de dispositivos.",
        categoria: "Chips"  // Asignado a "Chips"
    },
    {
        nombre: "Conector",
        img: "https://www.profesionalreview.com/wp-content/uploads/2018/11/Conectores-externos-de-una-placa-base-1.png",
        descripcion: "Los conectores permiten la conexión física de diversos dispositivos y periféricos al ordenador. Existen diferentes tipos de conectores, como USB, HDMI y SATA, cada uno con un propósito específico para transmitir datos, video o energía.",
        categoria: "Puertos"  // Asignado a "Puertos"
    },
    {
        nombre: "Dicipador",
        img: "https://w7.pngwing.com/pngs/931/914/png-transparent-computer-system-cooling-parts-heat-sink-kuhler-computer-hardware-hsm74-computer-intel-refrigeration.png",
        descripcion: "Un disipador es un dispositivo utilizado para eliminar o reducir el calor generado por componentes electrónicos, como procesadores en computadoras. Su función principal es disipar el calor hacia el entorno para evitar el sobrecalentamiento del componente y asegurar su correcto funcionamiento. ",
        categoria: "Disipadores"  // Asignado a "Disipadores"
    },
    {
        nombre: "Puerto USB",
        img: "https://w7.pngwing.com/pngs/910/301/png-transparent-usb-port-interface-thumbnail.png",
        descripcion: "Los conectores permiten la conexión física de diversos dispositivos y periféricos al ordenador. Existen diferentes tipos de conectores, como USB, HDMI y SATA, cada uno con un propósito específico para transmitir datos, video o energía.",
        categoria: "Puertos"  // Asignado a "Puertos"
    }
];


export {componentes}