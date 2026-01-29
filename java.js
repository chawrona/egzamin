const java = [
    // Podstawy i Narzędzia
    "Czym jest jshell wspomniany w notatkach?",
    "Jaka jest różnica między java (środowisko wykonawcze) a javac?",
    "Jaką komendą tworzymy nowy obiekt klasy Scanner do odczytu z konsoli?",
    "Czym różni się metoda scanner.next() od scanner.nextLine()?",
    "Jakiej metody Scannera użyjesz do pobrania liczby całkowitej?",
    "Co oznacza stwierdzenie, że Stringi są 'niemutowalne' i jaki ma to wpływ na metody operujące na tekstach?",
    "Dlaczego zapis text[i] nie zadziała w Javie i jakiej metody należy użyć zamiast niego?",
    "Do czego służy metoda text.length()?",
    "Jakie są różnice między metodą .replace() a .replaceAll()?",
    "Co robi metoda .substring(start, end)?",
    "Dlaczego do porównywania treści Stringów używamy .equals(), a nie innej metody?",
    "Jak sprawdzić, czy dany znak jest literą, a jak, czy jest cyfrą (korzystając z klasy Character)?",
    "Co zwracają metody .toLowerCase() i .toUpperCase() i czy zmieniają oryginalny tekst?",
    "Jakie metody klasy StringBuilder pozwalają na dodanie tekstu i odwrócenie go?",
    "Co robi metoda sb.deleteCharAt(i) w klasie StringBuilder?",
    "Jak przekonwertować obiekt StringBuilder z powrotem na String?",

    // Tablice i Klasy
    "W jaki sposób tworzy się tablicę, znając z góry jej długość (składnia new)?",
    "Jak utworzyć tablicę podając od razu jej zawartość w klamerkach?",
    "Jaki jest typ tablicy liczb całkowitych w Javie?",
    "Jak zdefiniować konstruktor w klasie Student przyjmujący argumenty?",
    "Do czego służy słowo kluczowe this wewnątrz konstruktora (np. this.age = age)?",
    "Jakie modyfikatory dostępu mają pola w przykładowej klasie Student z notatek?",

    // Dziedziczenie, Polimorfizm, Enum
    "Jakiego słowa kluczowego używamy do dziedziczenia klasy?",
    "Co robi wywołanie super() w konstruktorze?",
    "Na czym polega przeciążanie metod (overloading)?",
    "Czym jest polimorfizm w kontekście Javy?",
    "Jak zdefiniować typ wyliczeniowy (enum) o nazwie Difficulty?",
    "Do czego służy adnotacja @Override i przy jakich metodach warto ją stosować?",

    // Interfejsy i Abstrakcja
    "Jakiego słowa kluczowego używa klasa, aby zaimplementować interfejs?",
    "Jakie modyfikatory (jawnie lub niejawnie) posiadają pola zdefiniowane w interfejsie?",
    "Czy metody w interfejsie muszą być zawsze abstrakcyjne (co z metodami statycznymi/domyślnymi)?",
    "Co oznacza, że klasa jest abstrakcyjna?",
    "Czy można utworzyć instancję (obiekt) klasy abstrakcyjnej?",
    "Czy klasa abstrakcyjna musi posiadać metody abstrakcyjne?",
    "Czy konstruktor w klasie abstrakcyjnej może być abstrakcyjny?",
    "Jaka jest kluczowa różnica między interfejsem a klasą abstrakcyjną w kontekście pól?",
    "Czy można implementować wiele interfejsów w jednej klasie?",
    "Czy klasy abstrakcyjne mogą posiadać konstruktor?",

    // Static i Final
    "Kiedy klasa może być statyczna?",
    "Co umożliwiają metody i pola statyczne w kontekście tworzenia instancji klasy?",
    "Jakie ograniczenia nakłada słowo final na klasę?",
    "Co oznacza final w kontekście metody, a co w kontekście pola?",

    // Pliki i Asercje
    "Jakiej klasy (wraz z FileReader) używa się do buforowanego odczytu plików tekstowych?",
    "Jaki warunek w pętli while pozwala czytać plik linijka po linijce do końca?",
    "Jaką flagę należy dodać przy uruchamianiu programu, aby asercje działały?",
    "Jaki wyjątek zostanie rzucony, gdy warunek w assert (np. assert x > 0) nie zostanie spełniony?",

    // Kolekcje, Pętle, Generics
    "Wymień podstawowe metody dostępne dla listy (List), o których wspominają notatki.",
    "Jaka jest główna cecha zbiorów (Set) odróżniająca je od list?",
    "Jakie metody służą do dodawania i pobierania elementów z mapy (Map)?",
    "Jaka jest składnia pętli for-each w Javie?",
    "Jak wygląda składnia funkcji strzałkowej (lambda) w Javie w porównaniu do JS?",
    "Co oznacza zapis generyczny <? extends Number>?",
    "Co oznacza sam znak zapytania ? w typach generycznych (wildcard)?",

    // JUnit i Kolejki
    "Jakimi adnotacjami w JUnit oznacza się metody uruchamiane przed i po każdym teście?",
    "Do czego służą adnotacje @ParameterizedTest oraz np. @ValueSource?",
    "Jak sprawdzić w JUnit, czy metoda rzuca oczekiwany wyjątek?",
    "Czym różni się Queue (kolejka FIFO) od Deque?",
    "Jaka metoda iteratora pozwala na bezpieczne usunięcie elementu w trakcie iteracji?",
    "Czy iterator w Javie można zresetować, aby przejść kolekcję od nowa?"
];