const allCards = [
    // 1. TYPY DANYCH
    { q: "Podstawy programowania C: Jaki rozmiar ma typ char i jaki jest jego zakres?", a: "1 bajt; od -128 do 127" },
    { q: "Podstawy programowania C: Ile bajtów zajmuje typ int?", a: "4 bajty" },
    { q: "Podstawy programowania C: Jakiego nagłówka wymaga użycie typu bool?", a: "#include <stdbool.h>" },
    { q: "Podstawy programowania C: Ile bajtów zajmuje typ short?", a: "2 bajty" },
    { q: "Podstawy programowania C: Ile bajtów zajmuje typ long long?", a: "8 bajtów" },
    { q: "Podstawy programowania C: Ile bajtów zajmuje typ float?", a: "4 bajty" },
    { q: "Podstawy programowania C: Ile bajtów zajmuje typ double?", a: "8 bajtów" },
    { q: "Podstawy programowania C: Jaki jest rozmiar typu long?", a: "Od 4 do 8 bajtów" },
    { q: "Podstawy programowania C: Czym różni się signed od unsigned?", a: "signed: wartości dodatnie i ujemne; unsigned: tylko nieujemne (pozwala zapisać większe liczby dodatnie)" },
    { q: "Podstawy programowania C: Jak zadeklarować zmienną 'liczba' o wartości -5?", a: "signed int liczba = -5;" },

    // 2. ZMIENNE I INSTRUKCJE
    { q: "Podstawy programowania C: Jak zawsze musimy deklarować zmienne?", a: "Zawsze typem, np. int liczba = 5;" },
    { q: "Podstawy programowania C: Czym jest wyrażenie (podaj przykład)?", a: "To kombinacja zmiennych i operatorów zwracająca wartość, np. liczba * liczbaDwa + 15;" },
    { q: "Podstawy programowania C: Czym jest instrukcja (podaj przykład)?", a: "To polecenie wykonania akcji zakończone średnikiem, np. liczbaDwa = 15;" },
    { q: "Podstawy programowania C: Jak zapisać instrukcję złożoną z kilku operacji?", a: "Używając klamer, np. { liczba = 10; liczbaDwa = 15; printf(\"%d %d\", liczba, liczbaDwa); }" },

    // 3. INSTRUKCJE STERUJĄCE
    { q: "Podstawy programowania C: Podaj składnię instrukcji if-else.", a: "if(warunek){...} else{...}" },
    { q: "Podstawy programowania C: Jak wygląda struktura switch z przypadkami 1, 2 i opcją domyślną?", a: "switch(zmienna){ case 1: ... break; case 2: ... break; default: ... }" },
    { q: "Podstawy programowania C: Podaj składnię pętli for.", a: "for(int i = 0; i < 10; i++){...}" },
    { q: "Podstawy programowania C: Podaj składnię pętli while.", a: "while(warunek){...}" },
    { q: "Podstawy programowania C: Podaj składnię pętli do-while.", a: "do {...} while(warunek);" },
    { q: "Podstawy programowania C: Wymień instrukcje skoku (skoki).", a: "break, continue, return" },

    // 4. FUNKCJE I STRUKTURA PROGRAMU
    { q: "Podstawy programowania C: Jak wygląda deklaracja funkcji zwracającej podwojoną wartość int?", a: "int funkcja(int x) { return x * 2; }" },
    { q: "Podstawy programowania C: Jak zadeklarować funkcję, która nie przyjmuje parametrów i nic nie zwraca?", a: "void funkcja2();" },
    { q: "Podstawy programowania C: Co jest ciałem głównej funkcji programu?", a: "int main() { ... return 0; }" },

    // 5. TABLICE I ROZMIAR (LENGTH)
    { q: "Podstawy programowania C: Jak zainicjalizować tablicę 'arr' wartościami od 1 do 5?", a: "int arr[5] = {1,2,3,4,5};" },
    { q: "Podstawy programowania C: Podaj kod na wyznaczenie liczby elementów (length) tablicy.", a: "int length = sizeof(arr) / sizeof(arr[0]);" },
    { q: "Podstawy programowania C: Wyjaśnij co oznaczają człony we wzorze: sizeof(arr) / sizeof(arr[0])", a: "Rozmiar całej tablicy w bajtach / rozmiar pojedynczego elementu" },
    { q: "Podstawy programowania C: Jak zadeklarować macierz 2x3 i przypisać wartość 5 do 1. wiersza i 2. kolumny?", a: "int macierzPierwsza[2][3]; macierzPierwsza[0][1] = 5;" },
    { q: "Podstawy programowania C: Jak poprawnie pobrać od użytkownika wymiary n, m i zadeklarować taką macierz?", a: "int n, m; scanf(\"%d %d\", &n, &m); int macierz[n][m];" },

    // 6. WSKAŹNIKI
    { q: "Podstawy programowania C: Jak zadeklarować wskaźnik 'p' do zmiennej 'x'?", a: "int x = 10; int *p = &x;" },
    { q: "Podstawy programowania C: Co przechowuje wskaźnik, a co uzyskujemy przez dereferencję (*p)?", a: "Wskaźnik przechowuje adres; przez *p uzyskujemy wartość pod tym adresem." },
    { q: "Podstawy programowania C: Jak zmienić wartość zmiennej oryginalnej za pomocą wskaźnika?", a: "*p = 20;" },
    { q: "Podstawy programowania C: Jak ustawić wskaźnik na pierwszy element tablicy 'tab'?", a: "int *p1 = tab;" },
    { q: "Podstawy programowania C: Jak zadeklarować wskaźnik na pierwszy element macierzy 3x3?", a: "int (*p2)[3] = macierz;" },

    // 7. STRUKTURY
    { q: "Podstawy programowania C: Jak zdefiniować strukturę 'Osoba' (imie - 20 znaków, wiek - int)?", a: "struct Osoba { char imie[20]; int wiek; };" },
    { q: "Podstawy programowania C: Jak zainicjalizować zmienną strukturalną 'o1'?", a: "struct Osoba o1 = {\"Janina\", 30};" },
    { q: "Podstawy programowania C: Jak dostać się do pola 'wiek' przez kropkę, a jak przez wskaźnik 'p'?", a: "o1.wiek oraz p->wiek (lub (*p).wiek)" },

    // 1. WSKAŹNIKI I OPERACJE
    { q: "Podstawy programowania C: Co to jest wskaźnik?", a: "Zmienna przechowująca adres pamięci innej zmiennej." },
    { q: "Podstawy programowania C: Co robi operator & w kontekście wskaźników?", a: "Jest to operator adresu – zwraca adres danej zmiennej." },
    { q: "Podstawy programowania C: Co robi operator * przed nazwą wskaźnika (np. *p)?", a: "Jest to operator dostępu do wartości – pozwala odczytać lub zmienić wartość pod adresem." },
    { q: "Podstawy programowania C: Co oznacza operacja p++ na wskaźniku typu int?", a: "Przejście do kolejnej komórki pamięci (przesunięcie adresu o sizeof(int) bajtów)." },
    { q: "Podstawy programowania C: Na czym polega arytmetyka wskaźników?", a: "Na przesuwaniu wskaźnika o wielokrotność rozmiaru typu danych, na który on wskazuje." },

    // 2. WSKAŹNIK PODWÓJNY I TABLICE WSKAŹNIKÓW
    { q: "Podstawy programowania C: Na co wskazuje wskaźnik podwójny (np. int **pp)?", a: "Wskazuje na inny wskaźnik." },
    { q: "Podstawy programowania C: Jak wypisać wartość zmiennej x używając wskaźnika podwójnego pp?", a: "printf(\"%d\", **pp);" },
    { q: "Podstawy programowania C: Do czego wykorzystuje się wskaźniki podwójne?", a: "Do tworzenia dynamicznych tablic 2D oraz przekierowywania wskaźników w funkcjach." },
    { q: "Podstawy programowania C: Co to jest tablica wskaźników?", a: "Tablica, której elementami są adresy (często używana do tablic napisów, np. argv)." },
    { q: "Podstawy programowania C: Jak wypisać drugi element (indeks 1) z tablicy napisów 'napisy'?", a: "printf(\"%s\", napisy[1]);" },
    { q: "Podstawy programowania C: Jaka jest różnica między tablicą a wskaźnikiem?", a: "Tablica ma stały adres (jest etykietą), wskaźnik jest zmienną przechowującą adres i można go modyfikować." },

    // 3. DYNAMICZNA ALOKACJA PAMIĘCI
    { q: "Podstawy programowania C: Kiedy przydzielana jest pamięć dynamiczna?", a: "W trakcie działania programu (na stercie)." },
    { q: "Podstawy programowania C: Co robi funkcja malloc(size)?", a: "Przydziela blok pamięci o określonym rozmiarze (w bajtach)." },
    { q: "Podstawy programowania C: Czym różni się calloc od malloc?", a: "calloc dodatkowo wypełnia przydzieloną pamięć zerami." },
    { q: "Podstawy programowania C: Do czego służy funkcja realloc?", a: "Do zmiany rozmiaru wcześniej przydzielonego bloku pamięci." },
    { q: "Podstawy programowania C: Jaka funkcja służy do zwalniania pamięci dynamicznej?", a: "free();" },
    { q: "Podstawy programowania C: Co to jest wyciek pamięci?", a: "Utrata dostępu do pamięci, która nie została zwolniona przez free(), co prowadzi do błędów programu." },
    { q: "Podstawy programowania C: Co zwraca malloc w przypadku niepowodzenia?", a: "Zwraca NULL." },
    { q: "Podstawy programowania C: Dlaczego wynik malloca zwykle nie jest rzutowany w C?", a: "Ponieważ void* jest automatycznie i bezpiecznie konwertowany na dowolny typ wskaźnika." },

    // 4. ŁAŃCUCHY ZNAKOWE (STRINGS)
    { q: "Podstawy programowania C: Czym jest łańcuch znakowy w C?", a: "Tablicą typu char zakończoną znakiem specjalnym '\\0'." },
    { q: "Podstawy programowania C: Co robi funkcja strlen(s)?", a: "Zwraca długość napisu, nie licząc znaku końcowego '\\0'." },
    { q: "Podstawy programowania C: Która funkcja służy do kopiowania napisów?", a: "strcpy(dest, src);" },
    { q: "Podstawy programowania C: Do czego służy funkcja strcat(dest, src)?", a: "Do konkatenacji, czyli łączenia (dolepiania) napisów." },
    { q: "Podstawy programowania C: Jak porównać dwa napisy w C?", a: "Używając funkcji strcmp(a, b);" },
    { q: "Podstawy programowania C: Jak przejść pętlą przez napis bez użycia strlen?", a: "for(int i=0; napis[i]!='\\0'; i++)" },

    // 5. REKURENCJA
    { q: "Podstawy programowania C: Co to jest rekurencja?", a: "Sytuacja, w której funkcja wywołuje samą siebie." },
    { q: "Podstawy programowania C: Co dzieje się ze stosem przy każdym wywołaniu rekurencyjnym?", a: "Tworzony jest nowy stos (ramka stosu) z własnymi kopiami zmiennych lokalnych." },
    { q: "Podstawy programowania C: Co się stanie w przypadku braku warunku stopu w rekurencji?", a: "Dojdzie do nieskończonej rekurencji i przepełnienia stosu (stack overflow)." },

    // 6. PLIKI
    { q: "Podstawy programowania C: Jak otworzyć plik tekstowy do odczytu?", a: "FILE *f = fopen(\"nazwa.txt\", \"r\");" },
    { q: "Podstawy programowania C: Jakie są tryby otwarcia dla plików binarnych?", a: "rb (odczyt), wb (zapis), ab (dopisanie)." },
    { q: "Podstawy programowania C: Jakimi funkcjami zapisujemy/odczytujemy dane w trybie tekstowym?", a: "fprintf() oraz fscanf()." },
    { q: "Podstawy programowania C: Jakimi funkcjami zapisujemy/odczytujemy dane w trybie binarnym?", a: "fwrite() oraz fread()." },
    { q: "Podstawy programowania C: Czym różni się dostęp sekwencyjny od swobodnego?", a: "Sekwencyjny idzie po kolei; swobodny pozwala na skok do dowolnej pozycji w pliku." },
    { q: "Podstawy programowania C: Co robi funkcja fseek(f, pos, SEEK_SET)?", a: "Ustawia kursor (pozycję) w pliku na podaną wartość." },
    { q: "Podstawy programowania C: Do czego służy funkcja ftell(f)?", a: "Zwraca aktualną pozycję kursora w pliku." },
    { q: "Podstawy programowania C: Co oznacza parametr SEEK_CUR w fseek?", a: "Przesunięcie względem aktualnej pozycji kursora w pliku." },
    { q: "Podstawy programowania C: Co oznaczają parametry SEEK_SET oraz SEEK_END w fseek?", a: "SEEK_SET: od początku pliku; SEEK_END: od końca pliku." },

    // 7. WSKAŹNIKI DO FUNKCJI
    { q: "Podstawy programowania C: Co przechowuje wskaźnik do funkcji?", a: "Adres pamięci, pod którym zaczyna się kod funkcji." },
    { q: "Podstawy programowania C: Jak zadeklarować wskaźnik 'pf' na funkcję przyjmującą dwa inty i zwracającą int?", a: "int (*pf)(int, int);" },
    { q: "Podstawy programowania C: Podaj przykład praktycznego zastosowania wskaźnika do funkcji.", a: "Funkcja sortująca, np. qsort()." },

    // 8. STRUKTURA I KLASY ZMIENNYCH
    { q: "Podstawy programowania C: Do czego służy dyrektywa #define?", a: "Do tworzenia stałych symbolicznych (makr), np. #define ROZMIAR 10." },
    { q: "Podstawy programowania C: Co robi słowo kluczowe 'static' przy zmiennej lokalnej?", a: "Powoduje, że zmienna zachowuje swoją wartość pomiędzy wywołaniami funkcji." },
    { q: "Podstawy programowania C: Co oznacza 'static' przy zmiennej globalnej?", a: "Ogranicza widoczność tej zmiennej tylko do pliku, w którym została zadeklarowana." },
    { q: "Podstawy programowania C: Do czego służy klasa zmiennych 'extern'?", a: "Informuje, że zmienna jest zdefiniowana w innym pliku." },

    // 9. SPECYFIKATORY FORMATOWANIA
    { q: "Podstawy programowania C: Podaj specyfikatory dla: int, unsigned int, char.", a: "int: %d lub %i; unsigned int: %u; char: %c" },
    { q: "Podstawy programowania C: Jakich specyfikatorów używamy dla long int i short int?", a: "long: %ld; short: %hd" },
    { q: "Podstawy programowania C: Jaka jest różnica w specyfikatorze dla double w printf i scanf?", a: "printf: %f; scanf: %lf" },
    { q: "Podstawy programowania C: Jaki specyfikator służy do wypisania adresu wskaźnika?", a: "%p" },

    // 1. KLASA I OBIEKT
    { q: "Podstawy programowania C++: Czym jest klasa?", a: "To szablon opisujący dane (pola) i operacje (metody)." },
    { q: "Podstawy programowania C++: Czym jest obiekt?", a: "To konkretna instancja (egzemplarz) danej klasy." },
    { q: "Podstawy programowania C++: Jak zadeklarować prostą klasę Samochod z polem marka?", a: "class Samochod { public: string marka; };" },

    // 2. DZIEDZICZENIE, POLIMORFIZM, HERMETYZACJA
    { q: "Podstawy programowania C++: Na czym polega dziedziczenie?", a: "Pozwala tworzyć klasę pochodną na bazie klasy bazowej, przejmując jej cechy." },
    { q: "Podstawy programowania C++: Co oznacza zapis: class Samochod : public Pojazd?", a: "Klasa Samochod dziedziczy publicznie po klasie Pojazd (elementy publiczne bazy pozostają publiczne w pochodnej)." },
    { q: "Podstawy programowania C++: Czym jest polimorfizm?", a: "To możliwość przyjmowania różnych form przez metody o tej samej nazwie w klasach pochodnych." },
    { q: "Podstawy programowania C++: Kiedy w C++ działa polimorfizm?", a: "Gdy wywołanie metody wirtualnej odbywa się przez wskaźnik lub referencję do klasy bazowej." },
    { q: "Podstawy programowania C++: Do czego służy słowo kluczowe 'virtual' przy metodzie?", a: "Umożliwia dynamiczne wiązanie (wywołanie metody właściwej dla rzeczywistego typu obiektu)." },
    { q: "Podstawy programowania C++: Do czego służy słowo kluczowe override?", a: "Informuje kompilator, że metoda nadpisuje metodę wirtualną z klasy bazowej i pozwala wykryć błędy w sygnaturze." },
    { q: "Podstawy programowania C++: Dlaczego stosuje się wirtualne destruktory?", a: "Aby zapewnić poprawne usunięcie obiektów klas pochodnych przy użyciu wskaźnika do klasy bazowej." },
    { q: "Podstawy programowania C++: Na czym polega hermetyzacja (enkapsulacja)?", a: "Na ukrywaniu szczegółów implementacji i udostępnianiu danych tylko przez metody (np. get/set)." },
    { q: "Podstawy programowania C++: Jak najczęściej realizuje się dostęp do prywatnych pól klasy?", a: "Za pomocą publicznych metod typu 'getter' i 'setter'." },

    // 3. KLASY ABSTRAKCYJNE
    { q: "Podstawy programowania C++: Co to jest klasa abstrakcyjna?", a: "Klasa, z której nie można stworzyć obiektów; służy jako interfejs." },
    { q: "Podstawy programowania C++: Co to jest metoda czysto wirtualna?", a: "Metoda zadeklarowana jako: virtual typ nazwa() = 0;" },
    { q: "Podstawy programowania C++: Ile metod czysto wirtualnych musi mieć klasa, by być abstrakcyjną?", a: "Przynajmniej jedną." },

    // 4. WSKAŹNIKI, REFERENCJE, PAMIĘĆ
    { q: "Podstawy programowania C++: Czym jest wskaźnik w C++?", a: "Zmienna przechowująca adres innej zmiennej." },
    { q: "Podstawy programowania C++: Do czego służy operator * przy wskaźniku?", a: "Do dereferencji, czyli dostępu do wartości znajdującej się pod wskazywanym adresem." },
    { q: "Podstawy programowania C++: Czym jest referencja?", a: "To stały alias (inna nazwa) dla istniejącej już zmiennej." },
    { q: "Podstawy programowania C++: Jak zadeklarować referencję 'ref' do zmiennej 'y'?", a: "int &ref = y;" },
    { q: "Podstawy programowania C++: Jakim operatorem alokujemy pamięć dynamiczną w C++?", a: "Operatorem 'new'." },
    { q: "Podstawy programowania C++: Jakim operatorem zwalniamy pojedynczą zmienną, a jakim tablicę dynamiczną?", a: "Zmienną: delete; Tablicę: delete[]." },
    { q: "Podstawy programowania C++: Co grozi za brak użycia delete po new?", a: "Wyciek pamięci (memory leak)." },

    // 5. PRZECIĄŻANIE I FUNKCJE ZAPRZYJAŹNIONE
    { q: "Podstawy programowania C++: Na czym polega przeciążanie funkcji?", a: "Na tworzeniu funkcji o tej samej nazwie, ale z różnymi parametrami (typami lub liczbą)." },
    { q: "Podstawy programowania C++: Co umożliwia przeciążanie operatorów?", a: "Definiowanie zachowania operatorów (np. +, ==) dla własnych klas." },
    { q: "Podstawy programowania C++: Czym jest funkcja zaprzyjaźniona (friend)?", a: "Funkcja spoza klasy, która ma dostęp do jej prywatnych i chronionych pól." },

    // 6. POZIOMY DOSTĘPU I STATYKA
    { q: "Podstawy programowania C++: Wymień 3 poziomy dostępu w klasie i ich zasięg.", a: "public (wszędzie), protected (klasa i pochodne), private (tylko ta klasa)." },
    { q: "Podstawy programowania C++: Co cechuje zmienną statyczną w klasie?", a: "Jest wspólna dla wszystkich obiektów tej klasy (istnieje tylko jedna kopia)." },
    { q: "Podstawy programowania C++: Jak odwołać się do statycznego pola 'licznik' w klasie 'Licznik'?", a: "Licznik::licznik;" },
    { q: "Podstawy programowania C++: Co cechuje funkcję statyczną klasy?", a: "Można ją wywołać bez tworzenia obiektu danej klasy." },

    // 7. KONSTRUKTORY I DESTRUKTORY
    { q: "Podstawy programowania C++: Co to jest konstruktor?", a: "Specjalna metoda wywoływana automatycznie podczas tworzenia obiektu." },
    { q: "Podstawy programowania C++: Jaką nazwę ma konstruktor i destruktor klasy?", a: "Konstruktor ma nazwę taką samą jak klasa; destruktor ma nazwę klasy poprzedzoną znakiem ~." },
    { q: "Podstawy programowania C++: Co to jest destruktor?", a: "Metoda wywoływana automatycznie przy niszczeniu obiektu (służy np. do zwalniania pamięci)." },

    // 8. WYJĄTKI I STL
    { q: "Podstawy programowania C++: Wymień trzy słowa kluczowe służące do obsługi wyjątków.", a: "try, throw, catch." },
    { q: "Podstawy programowania C++: Co to jest STL?", a: "Standard Template Library – biblioteka gotowych struktur danych (kontenerów) i algorytmów." },
    { q: "Podstawy programowania C++: Charakterystyka kontenera 'vector'.", a: "Dynamiczna tablica z możliwością automatycznej zmiany rozmiaru." },
    { q: "Podstawy programowania C++: Charakterystyka kontenerów 'list' i 'map'.", a: "list: lista dwukierunkowa; map: zbiór par klucz-wartość (słownik)." },
    { q: "Podstawy programowania C++: Do czego służą 'set', 'stack' oraz 'queue'?", a: "set: zbiór unikalnych elementów; stack: stos (LIFO); queue: kolejka (FIFO)." },
    { q: "Podstawy programowania C++: Jak posortować vector 'v' przy użyciu STL?", a: "sort(v.begin(), v.end());" },

    // 1. ZŁOŻONOŚĆ OBLICZENIOWA
    { q: "Złożoność obliczeniowa: Co opisuje złożoność czasowa?", a: "Liczbę operacji potrzebnych do wykonania algorytmu." },
    { q: "Złożoność obliczeniowa: Co opisuje złożoność pamięciowa?", a: "Zużycie pamięci przez algorytm w trakcie jego działania." },
    { q: "Złożoność obliczeniowa: Co oznacza notacja O(f(n))?", a: "Asymptotyczne górne ograniczenie, czyli pesymistyczny ('najgorszy') przypadek." },
    { q: "Złożoność obliczeniowa: Co oznacza notacja Θ(f(n))?", a: "Ścisłe dopasowanie złożoności / dokładny rząd wzrostu." },
    { q: "Złożoność obliczeniowa: Czym różni się O(f(n)) od Θ(f(n))?", a: "O(f(n)) jest górnym ograniczeniem, Θ(f(n)) dokładnie opisuje rząd wzrostu (jest jednocześnie górnym i dolnym ograniczeniem)." },
    { q: "Złożoność obliczeniowa: Jaka jest złożoność sortowania bąbelkowego w notacji O?", a: "O(n^2)." },

   
    // 2. WYSZUKIWANIE I SORTOWANIE
    { q: "Algorytmy: Na czym polega wyszukiwanie liniowe i jaka jest jego złożoność?", a: "Przeszukiwanie element po elemencie; złożoność O(n)." },
    { q: "Algorytmy: Jakie wymagania muszą spełnić dane dla wyszukiwania binarnego i jaka jest jego złożoność?", a: "Dane muszą być posortowane; złożoność O(log n)." },
    { q: "Algorytmy: Podaj zasadę sortowania bąbelkowego.", a: "Porównywanie i zamiana sąsiadujących elementów." },
    { q: "Algorytmy: Jak działa sortowanie przez wstawianie (Insertion Sort)?", a: "Wstawia bieżący element w odpowiednie miejsce w już posortowanej części tablicy." },
    { q: "Algorytmy: Jak działa sortowanie przez wybieranie (Selection Sort)?", a: "Wybiera najmniejszy element z nieposortowanej części i zamienia go z elementem na bieżącej pozycji." },
    { q: "Algorytmy: Jaka jest złożoność O dla sortowania bąbelkowego, wstawiania i wybierania?", a: "O(n^2)." },
    { q: "Algorytmy: Jaka jest średnia i najgorsza złożoność QuickSort?", a: "Średnio O(n log n), najgorzej O(n^2)." },
    { q: "Algorytmy: Na czym polega mechanizm QuickSort?", a: "Dzielenie tablicy na dwie części względem wybranego punktu (pivota)." },
    { q: "Algorytmy: Jaka jest złożoność Merge Sort (sortowanie przez scalanie)?", a: "Zawsze O(n log n)." },
    { q: "Algorytmy: Na czym polega mechanizm Merge Sort?", a: "Dzielenie danych na połowy, aż do elementów pojedynczych, a następnie scalanie ich w porządku." },
    { q: "Algorytmy: Na jakiej strukturze danych opiera się Heap Sort?", a: "Na kopcu binarnym." },
    { q: "Algorytmy: Jaka jest złożoność sortowania kopcowego (Heap Sort)?", a: "O(n log n)." },

    // 3. LISTY Z DOWIĄZANIAMI
    { q: "Struktury danych: Jakie podstawowe operacje wykonuje się na listach z dowiązaniami?", a: "Dodawanie, usuwanie elementów oraz przechodzenie (przeskakiwanie) po liście." },
    { q: "Struktury danych: Czym charakteryzuje się lista jednokierunkowa?", a: "Każdy element zawiera dane i wskaźnik tylko na następny element." },
    { q: "Struktury danych: Czym charakteryzuje się lista dwukierunkowa?", a: "Każdy element wskazuje na element następny oraz poprzedni." },
    { q: "Struktury danych: Czym charakteryzuje się lista cykliczna?", a: "Ostatni element listy wskazuje na pierwszy element." },
    { q: "Struktury danych: Jaka jest złożoność dodawania na początku, a jaka na końcu listy?", a: "Na początku O(1), na końcu O(n)." },

    // 4. STOSY I KOLEJKI
    { q: "Struktury danych: Wyjaśnij skrót LIFO w kontekście stosu.", a: "Last In, First Out – ostatni element dodany jest pierwszym do wyjęcia." },
    { q: "Struktury danych: Wymień podstawowe operacje na stosie.", a: "push (dodaj), pop (usuń), peek (podejrzyj szczyt)." },
    { q: "Struktury danych: Wyjaśnij skrót FIFO w kontekście kolejki.", a: "First In, First Out – pierwszy element dodany jest pierwszym do wyjęcia." },
    { q: "Struktury danych: Wymień podstawowe operacje na kolejce.", a: "enqueue (dodaj), dequeue (usuń), front (podejrzyj przód)." },
    { q: "Struktury danych: Jaka jest złożoność operacji na stosie i kolejce?", a: "O(1)." },

    // 5. KOPIEC I KOLEJKA PRIORYTETOWA
    { q: "Struktury danych: Co to jest kopiec binarny?", a: "Drzewo binarne spełniające własność kopca (rodzic w określonej relacji do dzieci)." },
    { q: "Struktury danych: Jaka jest własność max-heap?", a: "Rodzic jest większy lub równy swoim dzieciom (rodzic ≥ dzieci)." },
    { q: "Struktury danych: Jaka jest własność min-heap?", a: "Rodzic jest mniejszy lub równy swoim dzieciom (rodzic ≤ dzieci)." },
    { q: "Struktury danych: Podaj złożoność wstawiania i odczytu ekstremum w kopcu.", a: "Wstawianie: O(log n), Odczyt ekstremum: O(1)." },
    { q: "Struktury danych: Jak działa kolejka priorytetowa?", a: "Każdy element ma priorytet; usuwany jest zawsze element o najwyższym priorytecie." },
    { q: "Struktury danych: Jaki algorytm klasycznie wykorzystuje kolejkę priorytetową?", a: "Algorytm Dijkstry (do wybierania wierzchołka o najmniejszej odległości)." },
    { q: "Struktury danych: Jaka jest złożoność insert i extract-max w kolejce opartej na kopcu?", a: "O(log n)." },

    // 6. DRZEWA
    { q: "Drzewa: Czym jest drzewo binarne?", a: "Drzewo, w którym każdy węzeł ma co najwyżej dwoje dzieci." },
    { q: "Drzewa: Wymień 3 sposoby przechodzenia drzewa binarnego.", a: "Inorder, preorder, postorder." },
    { q: "Drzewa: Jaka jest główna własność drzewa BST?", a: "Wartość w lewym poddrzewie < rodzic < wartość w prawym poddrzewie." },
    { q: "Drzewa: Jaka jest najgorsza złożoność operacji w drzewie BST?", a: "O(n) – gdy drzewo jest zdegenerowane do postaci listy." },
    { q: "Drzewa: Co to jest drzewo AVL?", a: "Samobalansujące się drzewo BST, w którym różnica wysokości poddrzew wynosi max 1." },
    { q: "Drzewa: Wymień typy rotacji w drzewach AVL.", a: "LL, RR, LR, RL." },
    { q: "Drzewa: Gdzie głównie stosuje się B-drzewa?", a: "W bazach danych i systemach plików ze względu na efektywny odczyt blokowy." },

    // 7. GRAFY
    { q: "Grafy: Z jakich elementów składa się graf?", a: "Z wierzchołków (węzłów) oraz krawędzi łączących te wierzchołki." },
    { q: "Grafy: Wymień dwie podstawowe reprezentacje grafu.", a: "Lista sąsiedztwa oraz macierz sąsiedztwa." },
    { q: "Grafy: Jak działa algorytm DFS?", a: "Przeszukiwanie w głąb (Depth-First Search) przy użyciu stosu lub rekurencji." },
    { q: "Grafy: Jak działa algorytm BFS?", a: "Przeszukiwanie wszerz (Breadth-First Search) przy użyciu kolejki." },
    { q: "Grafy: Do czego służy algorytm Dijkstry?", a: "Do znajdowania najkrótszej ścieżki z jednego źródła (tylko dla wag nieujemnych)." },
    { q: "Grafy: Jaki algorytm znajduje najkrótszą ścieżkę przy wagach ujemnych?", a: "Algorytm Bellmana-Forda." },
    { q: "Grafy: Co znajduje algorytm Floyda-Warshalla i jaka jest jego złożoność?", a: "Wszystkie najkrótsze ścieżki między każdą parą wierzchołków; złożoność O(n³)." },
    { q: "Grafy: Do czego służą algorytmy Kruskala i Prima?", a: "Do wyznaczania Minimalnego Drzewa Rozpinającego (MST)." },
    { q: "Grafy: Dla jakiego typu grafu stosuje się sortowanie topologiczne?", a: "Dla grafów skierowanych acyklicznych (DAG)." },


    // 1. ZŁOŻONOŚĆ OBLICZENIOWA - PODSTAWY
    { q: "Złożoność: Co opisuje notacja duże O (Big O)?", a: "Opisuje pesymistyczny (najgorszy) czas wykonania algorytmu lub jego zapotrzebowanie na pamięć w zależności od wielkości danych wejściowych." },
    { q: "Złożoność: Uporządkuj podstawowe klasy złożoności od najszybszej do najwolniejszej.", a: "O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n)." },
    { q: "Złożoność: Co oznacza złożoność O(1)?", a: "Czas wykonania jest stały i nie zależy od liczby danych (np. dostęp do elementu tablicy po indeksie)." },
    { q: "Złożoność: Co oznacza złożoność O(n)?", a: "Czas wykonania rośnie liniowo wraz ze wzrostem liczby danych (np. przejście pętlą przez wszystkie elementy)." },
    { q: "Złożoność: Czym różni się złożoność czasowa od pamięciowej?", a: "Czasowa dotyczy liczby operacji potrzebnych do wykonania algorytmu, a pamięciowa ilości pamięci RAM potrzebnej do jego działania." },

    // 2. WYSZUKIWANIE I SORTOWANIE - OGÓLNE
    { q: "Algorytmy: Wymień podstawowe algorytmy sortowania o złożoności O(n^2).", a: "Sortowanie bąbelkowe (Bubble Sort), przez wstawianie (Insertion Sort), przez wybieranie (Selection Sort)." },
    { q: "Algorytmy: Wymień efektywne algorytmy sortowania o złożoności O(n log n).", a: "Merge Sort (scalanie), Quick Sort (szybkie), Heap Sort (kopcowe)." },
    { q: "Algorytmy: Co to znaczy, że algorytm sortowania jest 'stabilny'?", a: "Zachowuje względną kolejność elementów o tych samych kluczach (wartościach)." },
    { q: "Algorytmy: Czy QuickSort jest algorytmem stabilnym?", a: "Nie, standardowa implementacja QuickSort nie jest stabilna." },
    { q: "Algorytmy: Co to jest algorytm 'dziel i zwyciężaj'?", a: "Metoda polegająca na dzieleniu problemu na mniejsze podproblemy, rozwiązywaniu ich, a następnie łączeniu wyników (np. Merge Sort)." },

    // 3. STRUKTURY DANYCH - WSTĘP I PORÓWNANIA
    { q: "Struktury danych: Jaka jest główna różnica między tablicą a listą powiązaną?", a: "Tablica ma stały rozmiar i ciągły obszar pamięci (szybki dostęp); lista jest dynamiczna, elementy są rozrzucone w pamięci (szybkie dodawanie/usuwanie)." },
    { q: "Struktury danych: Kiedy warto użyć tablicy zamiast listy?", a: "Gdy znamy rozmiar danych i potrzebujemy szybkiego dostępu do elementów przez indeks (O(1))." },
    { q: "Struktury danych: Kiedy warto użyć listy zamiast tablicy?", a: "Gdy często dodajemy/usuwamy elementy (zwłaszcza w środku) i nie znamy z góry ilości danych." },

    // 6. DRZEWA - PODSTAWOWE POJĘCIA
    { q: "Drzewa: Co to jest korzeń (root) drzewa?", a: "To najwyższy węzeł w drzewie, który nie ma rodzica." },
    { q: "Drzewa: Co to jest liść (leaf) w drzewie?", a: "To węzeł, który nie posiada żadnych dzieci." },
    { q: "Drzewa: Czym jest wysokość drzewa?", a: "To długość najdłuższej ścieżki od korzenia do liścia." },
    { q: "Drzewa: Co oznacza, że drzewo jest zrównoważone?", a: "Że wysokości lewego i prawego poddrzewa każdego węzła różnią się nieznacznie (zazwyczaj o max 1), co zapewnia optymalny czas operacji." },

    // 7. GRAFY - KLASYFIKACJA
    { q: "Grafy: Czym różni się graf skierowany od nieskierowanego?", a: "W grafie skierowanym krawędzie mają zwrot (strzałki A->B); w nieskierowanym relacja jest dwustronna (A-B)." },
    { q: "Grafy: Co to jest graf ważony?", a: "Graf, w którym krawędzie mają przypisane wartości liczbowe (wagi), np. odległość między miastami." },
    { q: "Grafy: Co to jest cykl w grafie?", a: "Ścieżka, która zaczyna się i kończy w tym samym wierzchołku." },

    // 1. TYPY DANYCH I WARUNKI
    { q: "Java: Ile bitów zajmuje typ double i podaj przykład?", a: "64 bity; np. 3.14" },
    { q: "Java: Ile bitów zajmuje typ float i jak zapisać jego literał?", a: "32 bity; np. 3.14f" },
    { q: "Java: Wymień podstawowe typy danych (prymitywne) w Java.", a: "int, double, float, boolean, char, long, byte, short" },
    { q: "Java: Czym charakteryzuje się typ String?", a: "Jest to typ referencyjny (obiektowy), a nie prymitywny." },
    { q: "Java: Podaj składnię pełnej instrukcji if-else if-else.", a: "if(warunek){...} else if(warunek){...} else{...}" },
    { q: "Java: Do czego służy 'default' w instrukcji switch?", a: "Wykonuje się, gdy żadna wartość 'case' nie pasuje do sprawdzanej zmiennej." },

    // 2. PĘTLE
    { q: "Java: Jaka jest różnica między pętlą while a do-while?", a: "while sprawdza warunek na początku, do-while na końcu (wykona się min. raz)." },
    { q: "Java: Jak wygląda składnia pętli for-each dla listy Stringów?", a: "for(String s : lista) { ... }" },
    { q: "Java: Co robią instrukcje break i continue?", a: "break przerywa całą pętlę; continue pomija bieżącą iterację i przechodzi do następnej." },

    // 3. KLASY I OBIEKTY
    { q: "Java: Czym jest klasa?", a: "To szablon opisujący dane (pola) i operacje (metody)." },
    { q: "Java: Czym jest obiekt?", a: "To konkretna instancja (egzemplarz) danej klasy." },
    { q: "Java: Czym jest metoda w klasie?", a: "Funkcją należącą do klasy, opisującą zachowanie obiektu." },
    { q: "Java: Czym jest konstruktor w klasie?", a: "Specjalną metodą wywoływaną podczas tworzenia obiektu (new), służącą do inicjalizacji pól." },
    { q: "Java: Do czego służy słowo kluczowe 'this' w konstruktorze?", a: "Wskazuje na pole bieżącego obiektu (rozróżnia je od parametru o tej samej nazwie)." },
    { q: "Java: Jak utworzyć nowy obiekt klasy Osoba?", a: "Osoba jan = new Osoba(\"Jan\", 25);" },

    // 4. DZIEDZICZENIE I KOMPOZYCJA
    { q: "Java: Jakiego słowa używamy do dziedziczenia klas?", a: "extends" },
    { q: "Java: Co robi słowo kluczowe 'super'?", a: "Jest referencją do klasy nadrzędnej; pozwala wywołać jej konstruktor lub metody." },
    { q: "Java: Na czym polega kompozycja w programowaniu obiektowym?", a: "Na posiadaniu obiektów innych klas jako pól wewnątrz danej klasy (relacja 'ma coś')." },

    // 5. INTERFEJSY I LAMBDY
    { q: "Java: Czym jest interfejs?", a: "Kontraktem definiującym metody (domyślnie publiczne i abstrakcyjne), które klasa musi zaimplementować." },
    { q: "Java: Jakiego słowa używa klasa, aby wypełnić kontrakt interfejsu?", a: "implements" },
    { q: "Java: Czym jest wyrażenie lambda?", a: "Krótkim zapisem funkcji anonimowej; pozwala przekazać kod jako argument: (x, y) -> x + y." },
    { q: "Java: Jaka jest główna zaleta klas wewnętrznych?", a: "Mają bezpośredni dostęp do prywatnych pól klasy zewnętrznej." },

    // 6. WYJĄTKI I ASERCJE
    { q: "Java: Do czego służy blok try-catch?", a: "Do przechwytywania i obsługi wyjątków (błędów) w trakcie działania programu." },
    { q: "Java: Co dzieje się w bloku 'finally'?", a: "Kod w nim zawarty wykonuje się zawsze, niezależnie od tego, czy wystąpił błąd, czy nie." },
    { q: "Java: Jaka jest różnica między throw a throws?", a: "throw służy do ręcznego rzucenia wyjątku; throws informuje w nagłówku metody, że może ona rzucić błąd." },
    { q: "Java: Jak włączyć obsługę asercji przy uruchamianiu programu?", a: "Używając flagi -ea (np. java -ea Program)." },
    { q: "Java: Co rzuca asercja, gdy warunek nie jest spełniony?", a: "AssertionError." },

    // 7. GENERYKI (PROGRAMOWANIE GENERYCZNE)
    { q: "Java: Jaki jest główny cel stosowania typów generycznych <T>?", a: "Umożliwienie pracy na różnych typach danych przy zachowaniu bezpieczeństwa typów (uniknięcie rzutowania)." },
    { q: "Java: Jak zadeklarować obiekt generyczny Pudelko dla typu Integer?", a: "Pudelko<Integer> p = new Pudelko<>(123);" },

    // 8. KOLEKCJE
    { q: "Java: Jaka jest podstawowa różnica między List, Set i Map?", a: "List – zachowuje kolejność i duplikaty; Set – brak duplikatów; Map – pary klucz-wartość." },
    { q: "Java: Charakterystyka listy (ArrayList).", a: "Utrzymuje kolejność elementów, dopuszcza duplikaty, dostęp przez indeks." },
    { q: "Java: Charakterystyka zbioru (HashSet).", a: "Brak duplikatów, nie gwarantuje kolejności, szybki dostęp oparty na hashowaniu." },
    { q: "Java: Charakterystyka mapy (HashMap).", a: "Przechowuje pary klucz-wartość; klucze muszą być unikalne." },

    // 1. TYPY I ZAKRESY
    { q: "Python: Wymień podstawowe typy wbudowane.", a: "int, float, bool, str, NoneType (None)." },
    { q: "Python: Które wbudowane struktury danych są mutowalne, a które niemutowalne?", a: "Mutowalne: list, set, dict. Niemutowalne: tuple, int, float, str." },
    { q: "Python: Charakterystyka listy.", a: "Indeksowana, mutowalna (można zmieniać elementy); zapis: [1, 2]." },
    { q: "Python: Charakterystyka krotki (tuple).", a: "Indeksowana, niemodyfikowalna (immutable); zapis: (1, 2)." },
    { q: "Python: Charakterystyka zbioru (set).", a: "Przechowuje tylko unikalne elementy, brak kolejności; zapis: {1, 2}." },
    { q: "Python: Charakterystyka słownika (dict).", a: "Przechowuje pary klucz-wartość; zapis: {'k': 'v'}." },
    { q: "Python: Co oznacza zakres lokalny zmiennej?", a: "Zmienna jest widoczna tylko wewnątrz funkcji, w której została zdefiniowana." },
    { q: "Python: Co robi słowo kluczowe 'global'?", a: "Pozwala na modyfikację zmiennej zdefiniowanej w zakresie globalnym (poza funkcjami)." },
    { q: "Python: Co robi słowo kluczowe 'nonlocal'?", a: "Wskazuje na zmienną w najbliższym zewnętrznym zakresie (w funkcjach zagnieżdżonych), który nie jest globalny." },
    { q: "Python: Co to jest domknięcie (closure)?", a: "Sytuacja, w której funkcja wewnętrzna zapamiętuje i ma dostęp do zmiennych z funkcji zewnętrznej, nawet po jej zakończeniu." },
    { q: "Python: Jaka jest różnica między domknięciem a słowem nonlocal?", a: "Domknięcie to mechanizm zapamiętywania zmiennych z funkcji zewnętrznej, a nonlocal to słowo kluczowe pozwalające je modyfikować." },

    // 2. STEROWANIE I PĘTLE
    { q: "Python: Jak wygląda składnia instrukcji warunkowej?", a: "if warunek: ... elif warunek: ... else: ..." },
    { q: "Python: Co wygeneruje range(5)?", a: "Sekwencję liczb od 0 do 4 (0, 1, 2, 3, 4)." },
    { q: "Python: Jaka jest różnica między break a continue?", a: "break przerywa całą pętlę; continue pomija resztę bieżącej iteracji i przechodzi do następnej." },

    // 3. FUNKCJE I PARAMETRY
    { q: "Python: Co oznacza gwiazdka (*) w liście parametrów funkcji: def f(a, *, b)?", a: "Wszystkie parametry po gwiazdce muszą być podane z nazwą (keyword-only arguments) przy wywołaniu." },
    { q: "Python: Do czego służy *args w definicji funkcji?", a: "Pozwala przyjąć dowolną liczbę argumentów pozycyjnych, które trafiają do krotki." },
    { q: "Python: Do czego służy **kwargs w definicji funkcji?", a: "Pozwala przyjąć dowolną liczbę argumentów nazwanych, które trafiają do słownika." },
    { q: "Python: Czym jest rekurencja?", a: "Mechanizmem, w którym funkcja wywołuje samą siebie (np. przy obliczaniu ciągu Fibonacciego)." },
    { q: "Python: Co to jest warunek stopu w rekurencji?", a: "Warunek, który kończy dalsze wywołania funkcji, zapobiegając nieskończonej rekurencji i błędom przepełnienia stosu." },

    // 4. WYRAŻENIA LISTOWE I GENERATORY
    { q: "Python: Czym jest List Comprehension?", a: "Zwięzłym sposobem tworzenia listy; np. [x**2 for x in range(5)] tworzy listę od razu w pamięci." },
    { q: "Python: Czym jest generator i jak go utworzyć w skróconej formie?", a: "Obiektem produkującym elementy jeden po drugim (oszczędność pamięci); tworzony w nawiasach okrągłych: (x**2 for x in range(5))." },
    { q: "Python: Główna różnica między list comprehension a generatorem?", a: "List comprehension tworzy całą listę w pamięci RAM od razu, generator produkuje elementy po jednym tylko wtedy, gdy są potrzebne." },

    // 5. LAMBDA
    { q: "Python: Co to jest funkcja lambda?", a: "Funkcja anonimowa (bez nazwy), jednorazowa, składająca się tylko z jednego wyrażenia." },
    { q: "Python: Czy lambda wymaga słowa 'return'?", a: "Nie, wynik wyrażenia jest zwracany automatycznie." },

    // 6. PLIKI, SERIALIZACJA I MODUŁY
    { q: "Python: Dlaczego zaleca się używanie 'with open(...)' przy obsłudze plików?", a: "Zapewnia automatyczne zamknięcie pliku, nawet jeśli wystąpi błąd." },
    { q: "Python: Co oznaczają tryby 'r', 'w', 'a' w open()?", a: "'r' - odczyt, 'w' - zapis (nadpisuje), 'a' - dopisywanie." },
    { q: "Python: Co to jest serializacja?", a: "Zamiana obiektu na postać, którą można zapisać (np. JSON lub binarnie) i później odtworzyć." },
    { q: "Python: Jak zapisać dane do pliku JSON używając biblioteki 'json'?", a: "Używając funkcji json.dump(dane, plik)." },
    { q: "Python: Czym różni się moduł od pakietu?", a: "Moduł to pojedynczy plik .py, pakiet to katalog zawierający plik __init__.py i inne moduły." },

    // 7. DEKORATORY
    { q: "Python: Co to jest dekorator?", a: "Funkcja, która 'owija' inną funkcję, aby dodać jej nową funkcjonalność bez modyfikacji jej kodu." },
    { q: "Python: Co to jest 'cukier składniowy' @ w kontekście dekoratorów?", a: "Zwięzły zapis służący do automatycznego nałożenia dekoratora na funkcję znajdującą się poniżej." },

    // 8. WYJĄTKI
    { q: "Python: Podaj pełną strukturę bloku obsługi wyjątków.", a: "try (kod ryzykowny), except (obsługa błędu), else (jeśli błędu nie było), finally (zawsze)." },
    { q: "Python: Kiedy wykonuje się blok else w try/except?", a: "Gdy w bloku try nie wystąpił żaden wyjątek." },

    // 9. MATCH / CASE
    { q: "Python: Do czego służy konstrukcja match/case?", a: "Do zaawansowanego dopasowywania wzorców (odpowiednik switch), wspiera destrukturyzację i sprawdzanie typów." },
    { q: "Python: Co oznacza znak podkreślenia (_) w konstrukcji case?", a: "Wzorzec dopasowujący dowolną wartość (tzw. wild-card / opcja domyślna)." },

    // 1. SYSTEMY LICZBOWE, KONWERSJE I ARYTMETYKA
    { q: "OiAK: Czym charakteryzuje się system dwójkowy (binarny)?", a: "Wykorzystuje tylko cyfry 0 i 1; bit to najmniejsza jednostka informacji." },
    { q: "OiAK: Jaka jest podstawa systemu oktalnego?", a: "Podstawą jest liczba 8." },
    { q: "OiAK: Jaka jest podstawa systemu szesnastkowego (heksadecymalnego)?", a: "Podstawą jest liczba 16." },
    { q: "OiAK: Jakie znaki występują w systemie szesnastkowym poza cyframi 0-9?", a: "Litery od A do F (gdzie A=10, F=15)." },
    { q: "OiAK: Na czym polega konwersja z systemu binarnego na dziesiętny?", a: "Na sumowaniu potęg liczby 2 odpowiadających pozycjom bitów równych 1." },
    { q: "OiAK: Na czym polega konwersja z systemu dziesiętnego na binarny?", a: "Na kolejnych podziałach liczby przez 2 i zapisywaniu reszt." },
    { q: "OiAK: Na czym polega najszybsza metoda konwersji z systemu binarnego na heksadecymalny?", a: "Na grupowaniu bitów po 4 (od prawej strony)." },
    { q: "OiAK: Ile wynosi wartość dziesiętna litery 'A' w systemie szesnastkowym?", a: "Wynosi 10." },
    { q: "OiAK: Jak wykonuje się dodawanie w systemie binarnym?", a: "Analogicznie do dziesiętnego, z przeniesieniem przy sumie 2 (10 w systemie binarnym)." },
    { q: "OiAK: Jak wykonuje się odejmowanie w systemie binarnym?", a: "Z wykorzystaniem pożyczek z wyższych bitów, analogicznie do systemu dziesiętnego." },
    { q: "OiAK: Na czym polega mnożenie binarne?", a: "Na przesuwaniu i dodawaniu – mnożenie przez 1 daje tę samą liczbę, przez 0 daje 0." },
    { q: "OiAK: Na czym polega dzielenie binarne?", a: "Na wielokrotnym odejmowaniu dzielnika od dzielnej z uwzględnieniem przesunięć bitowych." },

    // 2. OPERACJE LOGICZNE
    { q: "OiAK: Jak działa operacja logiczna AND?", a: "Wynik to 1 tylko wtedy, gdy oba argumenty są równe 1." },
    { q: "OiAK: Jak działa operacja logiczna OR?", a: "Wynik to 1, jeśli przynajmniej jeden z argumentów jest równe 1." },
    { q: "OiAK: Na czym polega operacja logiczna NOT?", a: "To negacja – zamienia 0 na 1, a 1 na 0." },
    { q: "OiAK: Kiedy operacja XOR daje wynik 1?", a: "Gdy argumenty są od siebie różne (jeden to 0, drugi to 1)." },

    // 3. UKŁADY KOMBINACYJNE
    { q: "OiAK: Czym są układy kombinacyjne?", a: "Układy bez pamięci; ich stan wyjściowy zależy wyłącznie od aktualnych sygnałów na wejściu." },
    { q: "OiAK: Wymień przykłady układów kombinacyjnych.", a: "Sumatory, dekodery, multipleksery, bramki logiczne, konwertery kodów." },
    { q: "OiAK: Czym są konwertery kodów?", a: "Układy kombinacyjne zamieniające jeden kod binarny na inny." },
    { q: "OiAK: Jakie są 4 etapy projektowania układów kombinacyjnych?", a: "1. Definicja problemu, 2. Tabela prawdy, 3. Funkcja logiczna (np. mapy Karnaugh), 4. Schemat." },

    // 4. UKŁADY SEKWENCYJNE
    { q: "OiAK: Czym są układy sekwencyjne?", a: "Układy posiadające pamięć; ich stan zależy od wejść oraz poprzedniego stanu (pamięci)." },
    { q: "OiAK: Wymień przykłady układów sekwencyjnych.", a: "Przerzutniki, rejestry, liczniki, automaty (FSM)." },
    { q: "OiAK: Jakie są podstawowe rodzaje przerzutników?", a: "RS, D, JK, T." },
    { q: "OiAK: Jaki jest pierwszy etap projektowania układów sekwencyjnych?", a: "Określenie liczby stanów oraz przejść między nimi." },
    { q: "OiAK: Na czym polega budowa tablicy przejść i wyjść?", a: "Na opisaniu zależności między stanami, wejściami i wyjściami układu." },
    { q: "OiAK: Jaki jest kolejny krok po tablicy przejść w projektowaniu układów sekwencyjnych?", a: "Wybór typu przerzutnika." },
    { q: "OiAK: Co obejmuje etap równań logicznych w układach sekwencyjnych?", a: "Wyprowadzenie równań sterujących dla każdego przerzutnika." },
    { q: "OiAK: Jaki jest ostatni etap projektowania układów sekwencyjnych?", a: "Zbudowanie schematu logicznego układu." },

    // 5. ARCHITEKTURA CPU
    { q: "OiAK: Co oznacza skrót CPU?", a: "Central Processing Unit – Centralna Jednostka Przetwarzająca." },
    { q: "OiAK: Za co odpowiada jednostka ALU w procesorze?", a: "Za wykonywanie operacji arytmetycznych i logicznych." },
    { q: "OiAK: Jaka jest rola jednostki sterującej (Control Unit - CU)?", a: "Pobieranie instrukcji, ich dekodowanie i sterowanie przepływem danych." },
    { q: "OiAK: Czym są rejestry procesora?", a: "To najszybsze i najmniejsze komórki pamięci wewnątrz CPU, na których wykonywane są bezpośrednie operacje." },
    { q: "OiAK: Wymień trzy etapy cyklu rozkazowego.", a: "Fetch (pobranie), Decode (dekodowanie), Execute (wykonanie)." },

    // 6. PAMIĘĆ I MAGISTRALE
    { q: "OiAK: Czym jest pamięć RAM?", a: "Pamięć ulotna (traci dane po wyłączeniu); przechowuje dane aktualnie używane przez CPU." },
    { q: "OiAK: Co to jest pamięć ROM?", a: "Pamięć nieulotna (tylko do odczytu); zawiera np. BIOS." },
    { q: "OiAK: Do czego służy pamięć Cache?", a: "To bardzo szybka pamięć blisko CPU służąca do buforowania często używanych danych." },
    { q: "OiAK: Co przesyła magistrala danych?", a: "Dane między procesorem a pamięcią RAM." },
    { q: "OiAK: Za co odpowiada magistrala adresowa?", a: "Wskazuje konkretne miejsce (adres) w pamięci, gdzie CPU chce czytać lub pisać." },
    { q: "OiAK: Jakie sygnały przesyła magistrala sterująca?", a: "Sygnały typu: czytaj, zapisz, przerwij, potwierdź." },

    // 7. PRZETWARZANIE RÓWNOLEGŁE I WYZWANIA
    { q: "OiAK: Jaki jest główny cel przetwarzania równoległego?", a: "Zwiększenie wydajności i szybkości poprzez wykonywanie wielu operacji jednocześnie." },
    { q: "OiAK: Na czym polega technika Pipeliningu?", a: "Na rozdzieleniu wykonywania instrukcji na etapy (np. fetch, decode), które dzieją się jednocześnie dla różnych rozkazów." },
    { q: "OiAK: Co oznacza superskalarność procesora?", a: "Zdolność CPU do wykonywania wielu instrukcji w tym samym cyklu zegara dzięki wielu jednostkom wykonawczym." },
    { q: "OiAK: Jaka jest różnica między wątkiem a rdzeniem?", a: "Wątek to lekki proces (programowy), rdzeń to fizyczna jednostka wykonawcza (sprzętowa)." },
    { q: "OiAK: Czym jest współbieżność w przetwarzaniu równoległym?", a: "To jednoczesne wykonywanie wielu zadań, które muszą być odpowiednio zsynchronizowane." },
    { q: "OiAK: Na czym polega problem synchronizacji w przetwarzaniu równoległym?", a: "Na zapewnieniu spójności danych między równocześnie wykonywanymi wątkami." },
    { q: "OiAK: Co oznacza pojęcie wąskiego gardła w systemach równoległych?", a: "Element systemu (np. pamięć), który ogranicza ogólną wydajność." },
    { q: "OiAK: Na czym polega podział zadań w przetwarzaniu równoległym?", a: "Na rozdzieleniu pracy pomiędzy wątki lub rdzenie w celu zwiększenia wydajności." },

    // 1. HISTORIA I PODSTAWY
    { q: "Kryptografia: Czym różni się kryptografia od steganografii?", a: "Kryptografia to szyfrowanie treści, a steganografia to ukrywanie samego faktu istnienia wiadomości." },
    { q: "Kryptografia: Jaką rolę odegrali Polacy w historii Enigmy?", a: "Polscy matematycy jako pierwsi złamali kod maszyny szyfrującej Enigma podczas II wojny światowej." },
    { q: "Kryptografia: Na czym polega szyfrowanie symetryczne?", a: "Używa tego samego klucza do szyfrowania i deszyfrowania; jest szybkie." },
    { q: "Kryptografia: Na czym polega szyfrowanie asymetryczne?", a: "Używa pary kluczy (publiczny i prywatny); jest wolniejsze od symetrycznego." },

    // 2. ALGORYTMY I TRYBY
    { q: "Kryptografia: Który algorytm symetryczny jest obecnie uznawany za standard?", a: "AES (Advanced Encryption Standard)." },
    { q: "Kryptografia: Dlaczego algorytmy DES i 3DES nie są już zalecane?", a: "DES jest stary i podatny na ataki, a 3DES jest uznawany za przestarzały i mało wydajny." },
    { q: "Kryptografia: Dlaczego tryb ECB (Electronic Codebook) jest uważany za zły?", a: "Ponieważ te same bloki tekstu jawnego zawsze dają te same bloki szyfrogramu, co ujawnia wzorce w danych." },
    { q: "Kryptografia: Jaka jest zaleta trybu CBC (Cipher Block Chaining) nad ECB?", a: "Każdy blok szyfrogramu zależy od poprzedniego, co ukrywa wzorce w danych." },

    // 3. RSA I FUNKCJE SKRÓTU (HASH)
    { q: "Kryptografia: Na jakim problemie matematycznym opiera się algorytm RSA?", a: "Na trudności faktoryzacji dużych liczb pierwszych." },
    { q: "Kryptografia: Do czego wykorzystuje się RSA?", a: "Do bezpiecznej wymiany kluczy, szyfrowania danych i tworzenia podpisów cyfrowych." },
    { q: "Kryptografia: Czym jest funkcja skrótu (Hash)?", a: "Jednokierunkowym 'odciskiem palca' danych; zmiana jednego bitu całkowicie zmienia wynik." },
    { q: "Kryptografia: Które rodziny funkcji skrótu są obecnie uznawane za bezpieczne?", a: "SHA-2 oraz SHA-3." },

    // 4. PODPIS CYFROWY I KRYPTOANALIZA
    { q: "Kryptografia: Jakie są trzy główne cele podpisu cyfrowego?", a: "Identyfikacja nadawcy (kto), integralność danych (czy zmienione) oraz niezaprzeczalność." },
    { q: "Kryptografia: Co oznacza termin kryptoanaliza?", a: "Naukę o łamaniu szyfrów i znajdowaniu słabości w systemach kryptograficznych." },
    { q: "Kryptografia: Na czym polega atak typu Brute Force?", a: "Na sprawdzaniu wszystkich możliwych kombinacji klucza aż do skutku." },
    { q: "Kryptografia: Na czym polega analiza częstotliwościowa?", a: "Na badaniu jak często dane znaki występują w szyfrogramie (skuteczne przeciw prostym szyfrom podstawieniowym)." }
];

const allCards2 = [
    // Podstawy i Narzędzia

     {
    "q": "Złożoność obliczeniowa: Co oznacza zapis O(g(n)) (duże O)?",
    "a": "Oznacza asymptotyczną granicę górną. Funkcja f(n) nie rośnie szybciej niż funkcja g(n) (z dokładnością do stałej)."
  },
  {
    "q": "Złożoność obliczeniowa: Co oznacza zapis Θ(g(n)) (Theta)?",
    "a": "Oznacza dokładne asymptotyczne oszacowanie (granicę górną i dolną). Funkcja rośnie w tym samym tempie co g(n)."
  },
  {
    "q": "Złożoność obliczeniowa: Jaka jest złożoność czasowa dostępu do k-tego elementu w tablicy, a jaka w liście jednokierunkowej?",
    "a": "W tablicy: O(1) (czas stały). W liście: O(n) (trzeba przejść przez k elementów)."
  },
  {
    "q": "Sortowanie: Co to znaczy, że algorytm sortowania jest 'stabilny'?",
    "a": "To znaczy, że nie zmienia on wzajemnej kolejności elementów, które mają takie same klucze (wartości)."
  },
  {
    "q": "Sortowanie: Jaka jest złożoność pesymistyczna prostych algorytmów sortowania (Bąbelkowe, Wstawianie, Wybieranie)?",
    "a": "O(n²) (kwadratowa)."
  },
  {
    "q": "Sortowanie: Na czym polega ogólna zasada sortowania przez wstawianie (Insertion Sort)?",
    "a": "Dzielimy zbiór na część posortowaną i nieposortowaną, a następnie pobieramy kolejny element i wstawiamy go w odpowiednie miejsce w części już posortowanej."
  },
  {
    "q": "Listy: Jaka jest główna zaleta listy powiązanej w porównaniu do tablicy przy operacji wstawiania elementu w środku struktury?",
    "a": "W liście wstawienie wymaga tylko zmiany wskaźników (O(1) jeśli mamy wskaźnik na miejsce), w tablicy wymaga przesunięcia wszystkich kolejnych elementów (O(n))."
  },
  {
    "q": "Listy: Czym różni się lista jednokierunkowa od dwukierunkowej?",
    "a": "W liście jednokierunkowej węzeł ma wskaźnik tylko na następnik, a w dwukierunkowej na następnik i poprzednik."
  },
  {
    "q": "Stosy i Kolejki: Jaka jest reguła dostępu do danych w stosie, a jaka w kolejce?",
    "a": "Stos: LIFO (Last In, First Out). Kolejka: FIFO (First In, First Out)."
  },
  {
    "q": "Stosy i Kolejki: Jaka jest złożoność czasowa operacji wstawiania (push/enqueue) i usuwania (pop/dequeue) w poprawnie zaimplementowanym stosie/kolejce?",
    "a": "O(1) (czas stały)."
  },
  {
    "q": "Stosy i Kolejki: Co to jest kolejka priorytetowa?",
    "a": "To struktura, w której elementy są pobierane nie według kolejności wstawienia, ale według ich priorytetu (np. najpierw największe)."
  },
  {
    "q": "Drzewa: Jaka jest definicja Drzewa Poszukiwań Binarnych (BST)?",
    "a": "To drzewo binarne, gdzie dla każdego węzła wartości w lewym poddrzewie są mniejsze, a w prawym większe od wartości tego węzła."
  },
  {
    "q": "Drzewa: Co to jest wysokość drzewa?",
    "a": "To długość najdłuższej ścieżki od korzenia do liścia (lub maksymalny poziom węzła)."
  },
  {
    "q": "Drzewa: Jaka jest pesymistyczna złożoność wyszukiwania w drzewie BST (gdy staje się listą)?",
    "a": "O(n) (liniowa)."
  },
  {
    "q": "Drzewa: Co to jest drzewo AVL?",
    "a": "To zrównoważone drzewo BST, w którym różnica wysokości lewego i prawego poddrzewa dla każdego węzła wynosi co najwyżej 1."
  },
  {
    "q": "Drzewa: Na czym polega przechodzenie po drzewie metodą Inorder (LVR)?",
    "a": "Odwiedzamy kolejno: Lewe poddrzewo -> Węzeł (Korzeń) -> Prawe poddrzewo."
  },
  {
    "q": "Drzewa: Jaki wynik daje przejście Inorder na drzewie BST?",
    "a": "Wypisuje wszystkie elementy drzewa w kolejności posortowanej (rosnąco)."
  },
  {
    "q": "Drzewa: Do czego służą rotacje w drzewach (np. AVL)?",
    "a": "Służą do przywracania równowagi drzewa (zmniejszania jego wysokości) przy zachowaniu własności BST."
  },
  {
    "q": "Algorytmy drzew: Jaki jest cel algorytmu DSW?",
    "a": "Równoważenie drzewa BST (zamiana w drzewo idealnie zrównoważone) w czasie liniowym, bez użycia sortowania i dodatkowej pamięci."
  },
  {
    "q": "Drzewa: Jaki jest problem przy usuwaniu z drzewa BST węzła, który ma dwoje dzieci?",
    "a": "Nie można go po prostu usunąć; trzeba go zastąpić jego poprzednikiem (maksimum z lewego poddrzewa) lub następnikiem (minimum z prawego)."
  },
{
    "q": "Struktury danych: Co to jest Kopiec Binarny (Heap)?",
    "a": "To drzewo binarne zupełne, które spełnia warunek kopca: każdy węzeł jest większy lub równy (w kopcu MAX) od swoich dzieci."
  },
  {
    "q": "Struktury danych: Do implementacji jakiej abstrakcyjnej struktury danych najlepiej nadaje się kopiec?",
    "a": "Do kolejki priorytetowej."
  },
  {
    "q": "Złożoność: Jaka jest złożoność czasowa podstawowych operacji na kopcu (wstawianie, usuwanie szczytu)?",
    "a": "O(log n) (zależna od wysokości drzewa)."
  },
  {
    "q": "Grafy: Co oznacza, że graf jest 'ważony'?",
    "a": "To graf, w którym każdej krawędzi przypisana jest pewna liczba (waga), oznaczająca np. koszt, odległość czy czas."
  },
  {
    "q": "Grafy: Ile krawędzi posiada graf pełny o N wierzchołkach?",
    "a": "N(N-1)/2 (każdy z każdym)."
  },
  {
    "q": "Grafy: Wymień dwie podstawowe metody reprezentacji grafu w pamięci komputera.",
    "a": "Macierz sąsiedztwa oraz Lista sąsiedztwa."
  },
  {
    "q": "Grafy: Która reprezentacja jest bardziej oszczędna pamięciowo dla grafów rzadkich (mało krawędzi)?",
    "a": "Lista sąsiedztwa (zależy od liczby krawędzi, a nie kwadratu liczby wierzchołków)."
  },
  {
    "q": "Algorytmy grafowe: Co to jest Minimalne Drzewo Rozpinające (MST)?",
    "a": "To podzbiór krawędzi grafu, który łączy wszystkie wierzchołki, nie tworzy cykli i ma minimalną możliwą sumę wag."
  },
  {
    "q": "Algorytmy grafowe: Na czym polega ogólna zasada Algorytmu Kruskala (wyznaczanie MST)?",
    "a": "Jest to algorytm zachłanny: wybieramy zawsze krawędź o najmniejszej wadze, która nie zamyka cyklu z już wybranymi krawędziami."
  },
  {
    "q": "Algorytmy grafowe: Do czego służy algorytm A* (A-star)?",
    "a": "Do znajdowania najkrótszej ścieżki w grafie z wykorzystaniem dodatkowej wiedzy (heurystyki)."
  },
  {
    "q": "Algorytmy grafowe: Co oznacza składnik h(x) we wzorze funkcji oceny f(x) = g(x) + h(x) w algorytmie A*?",
    "a": "Jest to heurystyka – szacowany (przewidywany) koszt dojścia od danego węzła do celu."
  },
  {
    "q": "Grafy: Kiedy graf nazywamy Eulerowskim?",
    "a": "Gdy posiada cykl Eulera, czyli ścieżkę zamkniętą przechodzącą przez każdą krawędź w grafie dokładnie jeden raz."
  },
  {
    "q": "Grafy: Jaki jest warunek konieczny, aby graf spójny posiadał cykl Eulera?",
    "a": "Wszystkie wierzchołki tego grafu muszą mieć stopień parzysty."
  },
  {
    "q": "Algorytmy grafowe: Co to jest 'most' w grafie (istotne np. w algorytmie Fleury'ego)?",
    "a": "To krawędź, której usunięcie spowodowałoby rozspójnienie grafu (zwiększenie liczby spójnych składowych)."
  },
  {
    "q": "Wyszukiwanie: Na czym polega Haszowanie (Mieszanie)?",
    "a": "Na przekształceniu klucza (np. napisu) za pomocą funkcji haszującej w indeks tablicy, pod którym zapisane zostaną dane."
  },
  {
    "q": "Wyszukiwanie: Jaka jest idealna/oczekiwana złożoność wyszukiwania w tablicy haszującej?",
    "a": "O(1) (czas stały)."
  },
  {
    "q": "Wyszukiwanie: Co to jest kolizja w tablicy haszującej?",
    "a": "Sytuacja, gdy funkcja haszująca zwraca ten sam indeks dla dwóch różnych kluczy."
  },
  {
    "q": "Wyszukiwanie: Wymień jedną metodę rozwiązywania kolizji.",
    "a": "Metoda łańcuchowa (listy podpinane pod indeks) lub adresowanie otwarte (szukanie wolnego miejsca w tablicy)."
  },
  {
    "q": "Wyszukiwanie: Jaka jest złożoność pesymistyczna wyszukiwania w tablicy haszującej (gdy wszystko trafi do jednego 'kubełka')?",
    "a": "O(n) (jak w liście)."
  },
  {
    "q": "Sortowanie/Struktury: Co to jest Sortowanie przez Kopcowanie (Heapsort)?",
    "a": "To algorytm sortowania o złożoności O(n log n), który wykorzystuje strukturę kopca do szybkiego pobierania elementu maksymalnego."
  },
    { q: "Java: Czym jest jshell?", a: "To interaktywna powłoka (REPL) do szybkiego testowania fragmentów kodu Javy." },
    { q: "Java: Jaka jest różnica między java a javac?", a: "javac kompiluje kod do bajtkodu (.class), a java (JVM) go uruchamia." },
    { q: "Java: Jaką komendą tworzymy nowy obiekt Scanner do odczytu z konsoli?", a: "new Scanner(System.in)" },
    { q: "Java: Czym różni się metoda scanner.next() od scanner.nextLine()?", a: "next() pobiera ciąg do białego znaku (słowo), a nextLine() całą linię." },
    { q: "Java: Jakiej metody Scannera użyjesz do pobrania liczby całkowitej?", a: "scanner.nextInt()" },
    { q: "Java: Co oznacza, że Stringi są 'niemutowalne'?", a: "Po utworzeniu nie można ich zmienić; metody zwracają nowy obiekt zamiast edytować stary." },
    { q: "Java: Dlaczego zapis text[i] nie zadziała i jakiej metody użyć?", a: "String nie jest tablicą; należy użyć metody text.charAt(i)." },
    { q: "Java: Do czego służy metoda text.length()?", a: "Zwraca długość łańcucha znaków." },
    { q: "Java: Jakie są różnice między metodą .replace() a .replaceAll()?", a: "replace() zamienia dosłownie, replaceAll() obsługuje wyrażenia regularne (Regex)." },
    { q: "Java: Co robi metoda .substring(start, end)?", a: "Zwraca fragment tekstu od indeksu start do end (bez znaku pod indeksem end)." },
    { q: "Java: Dlaczego do Stringów używamy .equals(), a nie ==?", a: "== porównuje referencje (adresy w pamięci), a .equals() zawartość tekstu." },
    { q: "Java: Jak sprawdzić, czy znak jest literą lub cyfrą?", a: "Używając metod statycznych Character.isLetter(c) lub Character.isDigit(c)." },
    { q: "Java: Czy metody .toLowerCase() zmieniają oryginalny tekst?", a: "Nie, zwracają nowy łańcuch znaków (Stringi są niemutowalne)." },
    { q: "Java: Jakie metody StringBuilder dodają tekst i go odwracają?", a: ".append() oraz .reverse()." },
    { q: "Java: Co robi metoda sb.deleteCharAt(i) w StringBuilder?", a: "Usuwa jeden znak znajdujący się pod podanym indeksem." },
    { q: "Java: Jak przekonwertować StringBuilder na String?", a: "Za pomocą metody .toString()." },

    // Tablice i Klasy
    { q: "Java: Jak tworzy się tablicę, znając jej długość (składnia)?", a: "new Typ[rozmiar], np. new int[5]." },
    { q: "Java: Jak utworzyć tablicę podając od razu jej zawartość?", a: "Typ[] nazwa = {wartosc1, wartosc2};" },
    { q: "Java: Jaki jest typ tablicy liczb całkowitych?", a: "int[]" },
    { q: "Java: Jak zdefiniować konstruktor w klasie Student?", a: "public Student(argumenty) { ... } (bez typu zwracanego, nazwa jak klasa)." },
    { q: "Java: Do czego służy słowo kluczowe this w konstruktorze?", a: "Wskazuje na bieżący obiekt, pozwala odróżnić pola klasy od parametrów." },
    { q: "Java: Jakie modyfikatory dostępu mają zazwyczaj pola w klasie?", a: "Private (dla zachowania enkapsulacji)." },

    // Dziedziczenie, Polimorfizm, Enum
    { q: "Java: Jakiego słowa kluczowego używamy do dziedziczenia?", a: "extends" },
    { q: "Java: Co robi wywołanie super() w konstruktorze?", a: "Wywołuje konstruktor klasy nadrzędnej (rodzica)." },
    { q: "Java: Na czym polega przeciążanie metod (overloading)?", a: "Tej samej nazwie metody, ale z różnymi parametrami (typem lub liczbą)." },
    { q: "Java: Czym jest polimorfizm?", a: "Możliwością traktowania obiektów różnych typów jako instancji ich wspólnej nadklasy." },
    { q: "Java: Jak zdefiniować typ wyliczeniowy enum?", a: "enum Difficulty { EASY, HARD }" },
    { q: "Java: Do czego służy adnotacja @Override?", a: "Informuje kompilator o nadpisywaniu metody rodzica (wymusza sprawdzenie poprawności)." },

    // Interfejsy i Abstrakcja
    { q: "Java: Jakiego słowa używa klasa, aby zaimplementować interfejs?", a: "implements" },
    { q: "Java: Jakie modyfikatory posiadają pola w interfejsie?", a: "public static final (są stałymi)." },
    { q: "Java: Czy metody w interfejsie muszą być zawsze abstrakcyjne?", a: "Nie, mogą być domyślne (default) lub statyczne (static)." },
    { q: "Java: Co oznacza, że klasa jest abstrakcyjna?", a: "Jest oznaczona jako abstract i nie można utworzyć jej instancji." },
    { q: "Java: Czy można utworzyć obiekt klasy abstrakcyjnej?", a: "Nie, można jedynie utworzyć obiekt klasy po niej dziedziczącej." },
    { q: "Java: Czy klasa abstrakcyjna musi posiadać metody abstrakcyjne?", a: "Nie, to nie jest wymagane." },
    { q: "Java: Czy konstruktor w klasie abstrakcyjnej może być abstrakcyjny?", a: "Nie, konstruktory nie mogą być abstrakcyjne." },
    { q: "Java: Jaka jest różnica między interfejsem a klasą abstrakcyjną (pola)?", a: "Interfejs ma tylko stałe, klasa abstrakcyjna może mieć zmienne pola (stan)." },
    { q: "Java: Czy można implementować wiele interfejsów w jednej klasie?", a: "Tak." },
    { q: "Java: Czy klasy abstrakcyjne mogą posiadać konstruktor?", a: "Tak, jest on wywoływany przez podklasy." },

    // Static i Final
    { q: "Java: Kiedy klasa może być statyczna?", a: "Tylko wtedy, gdy jest zagnieżdżona w innej klasie (static inner class)." },
    { q: "Java: Co umożliwiają metody statyczne?", a: "Wywołanie ich bez tworzenia instancji obiektu (należą do klasy)." },
    { q: "Java: Jakie ograniczenia nakłada słowo final na klasę?", a: "Nie można po niej dziedziczyć." },
    { q: "Java: Co oznacza final w metodzie, a co w polu?", a: "Metody nie można nadpisać, a pola nie można zmienić (stała)." },

    // Pliki i Asercje
    { q: "Java: Jakiej klasy używa się do buforowanego odczytu plików?", a: "BufferedReader (zazwyczaj owijający FileReader)." },
    { q: "Java: Jaki warunek w pętli while pozwala czytać plik do końca?", a: "while ((line = reader.readLine()) != null)" },
    { q: "Java: Jaką flagę należy dodać przy uruchamianiu, aby asercje działały?", a: "-ea (enable assertions)" },
    { q: "Java: Jaki wyjątek rzuca niespełniony assert?", a: "AssertionError" },

    // Kolekcje, Pętle, Generics
    { q: "Java: Wymień podstawowe metody dla List.", a: "add(), get(), remove(), size(), contains()." },
    { q: "Java: Jaka jest główna cecha zbiorów (Set)?", a: "Przechowują tylko unikalne elementy (brak duplikatów)." },
    { q: "Java: Jakie metody służą do obsługi Mapy?", a: "put(klucz, wartość) oraz get(klucz)." },
    { q: "Java: Jaka jest składnia pętli for-each?", a: "for (Typ element : kolekcja) { ... }" },
    { q: "Java: Jak wygląda strzałka w lambdzie w Javie (vs JS)?", a: "W Javie: -> (w JS: =>)." },
    { q: "Java: Co oznacza <? extends Number>?", a: "Wildcard z górnym ograniczeniem (typ dziedziczący po Number)." },
    { q: "Java: Co oznacza znak zapytania ? w typach generycznych?", a: "Wildcard (typ nieokreślony/dowolny)." },

    // JUnit i Kolejki
    { q: "Java: Jakie adnotacje JUnit oznaczają kod przed/po teście?", a: "@BeforeEach / @AfterEach (lub @BeforeAll / @AfterAll)." },
    { q: "Java: Do czego służy @ParameterizedTest?", a: "Do uruchamiania tego samego testu z wieloma różnymi danymi wejściowymi." },
    { q: "Java: Jak sprawdzić w JUnit, czy metoda rzuca wyjątek?", a: "assertThrows(OczekiwanyWyjątek.class, () -> kod)" },
    { q: "Java: Czym różni się Queue od Deque?", a: "Queue to zazwyczaj FIFO (jednostronna), Deque jest dwustronna." },
    { q: "Java: Jaka metoda iteratora bezpiecznie usuwa element?", a: "iterator.remove()" },
    { q: "Java: Czy iterator można zresetować?", a: "Nie, trzeba pobrać nowy iterator od kolekcji." }
];

const allCards3 = [
    // Typy danych i Składnia
    { q: "Python: W jaki sposób definiuje się krotkę (tuple) i co jest kluczowe?", a: "Kluczowe są przecinki (nawiasy są często opcjonalne); np. t = 1, 2." },
    { q: "Python: Jakie metody służą do dodawania i usuwania elementów ze zbioru (set)?", a: ".add() oraz .remove() (lub .discard())." },
    { q: "Python: Czym różni się frozenset od zwykłego set?", a: "Frozenset jest niemutowalny (nie można go zmieniać po utworzeniu)." },
    { q: "Python: Jaka jest składnia f-string i co wpisujemy przed apostrofem?", a: "Litera f lub F, np. f\"tekst\"." },
    { q: "Python: Jak wewnątrz f-stringa umieszcza się zmienne?", a: "W nawiasach klamrowych, np. f\"Witaj {imie}\"." },
    { q: "Python: Jaki typ danych reprezentuje liczby zespolone?", a: "complex (np. 3+4j)." },
    { q: "Python: Jaki typ danych tworzy się przecinkami bez nawiasów?", a: "Krotkę (tuple)." },
    { q: "Python: Jak wygląda składnia operatora trójargumentowego?", a: "x if warunek else y" },

    // Funkcje i Argumenty
    { q: "Python: Co oznacza zapis *args w definicji funkcji?", a: "Pozwala przekazać dowolną liczbę argumentów pozycyjnych (jako krotkę)." },
    { q: "Python: Co oznacza zapis **kwargs w definicji funkcji?", a: "Pozwala przekazać dowolną liczbę argumentów nazwanych (jako słownik)." },
    { q: "Python: Który argument (*args czy **kwargs) służy do argumentów nazwanych?", a: "**kwargs" },
    { q: "Python: Jak przekazać do funkcji dowolną ilość argumentów nienazwanych?", a: "Używając *args." },

    // Generatory i Dekoratory
    { q: "Python: Czym są generatory i jaką metodą pobiera się wartości?", a: "To funkcje zwracające iterator (yield); wartości pobiera się funkcją next()." },
    { q: "Python: Jaką składnią (nawiasami) tworzy się generator?", a: "Nawiasami okrągłymi: (x for x in data)." },
    { q: "Python: Czym różni się tworzenie generatora od listy (składniowo)?", a: "Generator ma nawiasy (), a lista []." },
    { q: "Python: Jakie dwa argumenty przyjmuje funkcja filter?", a: "Funkcję warunkową (zwracającą True/False) oraz iterowalny obiekt." },
    { q: "Python: Co zwraca funkcja filter?", a: "Iterator zawierający tylko te elementy, dla których funkcja zwróciła True." },
    { q: "Python: Jak przekonwertować wynik generatora/filter na listę?", a: "Funkcją list(), np. list(generator)." },
    { q: "Python: Co to jest dekorator?", a: "Funkcja, która przyjmuje inną funkcję i rozszerza jej działanie bez modyfikacji jej kodu." },
    { q: "Python: W jaki sposób dekorator rozszerza działanie funkcji?", a: "Poprzez owinięcie jej w inną funkcję (wrapper) wykonującą dodatkowy kod." },
    { q: "Python: Jak używa się dekoratora w kodzie?", a: "Umieszczając @nazwa_dekoratora bezpośrednio nad definicją funkcji." },

    // Wyjątki i Pliki
    { q: "Python: Jakim słowem kluczowym zastępuje się catch w bloku try-catch?", a: "except" },
    { q: "Python: Jak obsłużyć konkretny błąd (np. ValueError) i przypisać go do zmiennej?", a: "except ValueError as e:" },
    { q: "Python: Jak obsłużyć wiele wyjątków w jednej klauzuli except?", a: "Podając je w krotce, np. except (TypeError, ValueError):" },
    { q: "Python: Jaka jest klasa bazowa wyłapująca wszystkie błędy?", a: "Exception (lub BaseException)." },
    { q: "Python: Jakie argumenty przyjmuje funkcja open?", a: "Ścieżkę do pliku oraz tryb otwarcia (np. 'r', 'w')." },
    { q: "Python: Dlaczego zaleca się with open ... as ...?", a: "Automatycznie zamyka plik, nawet w przypadku wystąpienia błędu." },
    { q: "Python: Czym różni się read() od readline()?", a: "read() wczytuje całą treść, readline() tylko jedną linię." },
    { q: "Python: Jaki jest najlepszy sposób na czytanie pliku linia po linii?", a: "Iteracja w pętli: for line in file_object:." },

    // Formaty danych i Moduły
    { q: "Python: Jakiej funkcji używamy do zamiany słownika na JSON?", a: "json.dump() (do pliku) lub json.dumps() (do stringa)." },
    { q: "Python: Jakiej funkcji używamy do parsowania JSON?", a: "json.load() (z pliku) lub json.loads() (ze stringa)." },
    { q: "Python: Jakiego modułu używamy do czytania CSV?", a: "Modułu csv (obiekt csv.reader)." },
    { q: "Python: W jaki sposób iterujemy po wierszach CSV?", a: "Pętlą for po obiekcie readera (for row in reader)." },
    { q: "Python: Jakich narzędzi używamy do zapisu CSV?", a: "csv.writer oraz metody .writerow()." },
    { q: "Python: Co robi if __name__ == \"__main__\":?", a: "Sprawdza, czy plik został uruchomiony bezpośrednio, czy zaimportowany." },
    { q: "Python: Jaka jest różnica w działaniu tego bloku przy imporcie?", a: "Kod wewnątrz bloku nie wykona się, jeśli plik jest importowany jako moduł." },
    { q: "Python: Jaka paczka pozwala na stworzenie paczki instalacyjnej?", a: "setuptools" },
    { q: "Python: Jakim narzędziem instalujemy paczki?", a: "pip" },
    { q: "Python: Jakiej biblioteki używamy do parsowania argumentów CLI?", a: "argparse" },
    { q: "Python: Jak w argparse oznacza się argumenty opcjonalne vs pozycyjne?", a: "Opcjonalne zaczynają się od - lub -- (np. --name), pozycyjne nie." },

    // Testowanie
    { q: "Python: Na czym polegają testy jednostkowe?", a: "Na testowaniu najmniejszych, izolowanych fragmentów kodu (np. pojedynczych funkcji)." },
    { q: "Python: Czym różnią się testy integracyjne od jednostkowych?", a: "Integracyjne sprawdzają współpracę wielu modułów, jednostkowe tylko jeden element." },
    { q: "Python: Jaki jest cel testów regresyjnych?", a: "Wykrycie błędów wprowadzonych przez nowe zmiany w istniejącym kodzie." },
    { q: "Python: Co weryfikują testy akceptacyjne?", a: "Czy oprogramowanie spełnia wymagania biznesowe/użytkownika." },
    { q: "Python: Do czego służy słowo kluczowe assert?", a: "Rzuca wyjątek AssertionError, jeśli warunek po nim jest fałszywy." },
    { q: "Python: Wymień 3 biblioteki do testowania.", a: "unittest, pytest, doctest (lub nose/hypothesis)." },
    { q: "Python: Do czego służy dekorator @pytest.fixture?", a: "Definiuje funkcję przygotowującą dane/środowisko przed testem." },
    { q: "Python: Jak przekazać fixture do funkcji testowej?", a: "Umieszczając nazwę fixture jako argument funkcji testowej." },
    { q: "Python: Co umożliwia parametryzacja testów?", a: "Uruchomienie tego samego testu wielokrotnie z różnymi danymi wejściowymi." },
    { q: "Python: Czym jest Doctest lub Hypothesis?", a: "Doctest: testy w dokumentacji; Hypothesis: testy oparte na generowaniu danych (property-based)." }
];

const allCards4 = [
    // Pamięć i Literały
    { q: "Podstawy programowania C: Do czego dokładnie służy funkcja realloc?", a: "Zmienia rozmiar wcześniej zaalokowanego bloku pamięci." },
    { q: "Podstawy programowania C: Jakie przykłady prostych literałów (stałych) wymieniono w notatkach?", a: "Np. 12 (int), 3.14 (double), 'a' (char), \"tekst\" (string)." },
    { q: "Podstawy programowania C: Czym różnią się literały złożone od zwykłych tablic literałów?", a: "Literał złożony (np. (int[]){1,2}) tworzy obiekt bez nazwy, często tymczasowy." },
    { q: "Podstawy programowania C: Dlaczego sizeof może być mylący przy literałach złożonych?", a: "Zwraca rozmiar typu tablicowego, co może być mylone z rozmiarem wskaźnika." },
    { q: "Podstawy programowania C: Jak definiowana jest stała za pomocą dyrektywy preprocesora?", a: "#define NAZWA wartosc" },

    // Stringi (Napisy)
    { q: "Podstawy programowania C: Dlaczego tablica string musi być o 1 element większa niż liczba znaków?", a: "Aby pomieścić kończący znak pusty (null terminator)." },
    { q: "Podstawy programowania C: Jaki znak specjalny kończy każdy string w języku C?", a: "'\\0' (null character)." },
    { q: "Podstawy programowania C: Jak poprawnie zapisuje się nazwę znaku pustego?", a: "NUL (jedno 'L') dla znaku ASCII, NULL (dwa 'L') dla wskaźnika." },
    { q: "Podstawy programowania C: Jaką funkcję pełni biblioteka string.h?", a: "Zawiera funkcje do manipulacji łańcuchami znaków i blokami pamięci." },
    { q: "Podstawy programowania C: Do czego służy funkcja strlen?", a: "Zwraca długość łańcucha (bez znaku '\\0')." },
    { q: "Podstawy programowania C: Jakie zadanie wykonuje funkcja strcpy?", a: "Kopiuje zawartość jednego łańcucha do drugiego." },
    { q: "Podstawy programowania C: Co robi funkcja strcat?", a: "Dołącza (konkatenuje) jeden łańcuch na koniec drugiego." },
    { q: "Podstawy programowania C: W jakim celu używa się funkcji strcmp?", a: "Do leksykograficznego porównywania dwóch łańcuchów." },
    { q: "Podstawy programowania C: Do czego służy funkcja strchr?", a: "Wyszukuje pierwsze wystąpienie znaku w łańcuchu." },
    { q: "Podstawy programowania C: Co wyszukuje funkcja strstr?", a: "Wyszukuje wystąpienie podciągu (substring) w łańcuchu." },
    { q: "Podstawy programowania C: Wymień funkcje z rodziny 'str...', które znalazły się w notatkach.", a: "strlen, strcpy, strcat, strcmp, strchr, strstr." },

    // Wejście/Wyjście (I/O) i Konsola
    { q: "Podstawy programowania C: Jakie dwie metody pobierania tekstu z konsoli są podstawowe?", a: "scanf() oraz gets() / fgets()." },
    { q: "Podstawy programowania C: Dlaczego funkcja gets_s jest lepsza od gets?", a: "Wymaga podania rozmiaru bufora, chroniąc przed przepełnieniem (buffer overflow)." },
    { q: "Podstawy programowania C: Jaką funkcję na 'f' do pobierania tekstu wymieniono w notatkach?", a: "fgets()" },
    { q: "Podstawy programowania C: Do czego służy funkcja puts()?", a: "Wypisuje łańcuch na ekran i automatycznie dodaje znak nowej linii." },
    { q: "Podstawy programowania C: Jaka jest różnica między printf a puts?", a: "printf formatuje dane, puts wypisuje czysty tekst z nową linią na końcu." },
    { q: "Podstawy programowania C: Czy gets kontroluje długość tablicy?", a: "Nie, co czyni ją niebezpieczną." },

    // Pliki i Przekierowania
    { q: "Podstawy programowania C: Jak przekazać zawartość pliku do programu z konsoli?", a: "Używając operatora przekierowania wejścia (<)." },
    { q: "Podstawy programowania C: Jaki operator służy do przekierowania wyjścia do pliku?", a: "> (np. program.exe > wynik.txt)" },
    { q: "Podstawy programowania C: Jaki operator służy do przekazania pliku jako wejścia?", a: "< (np. program.exe < dane.txt)" },
    { q: "Podstawy programowania C: Czy przy przekierowaniu < program widzi różnicę?", a: "Nie, czyta ze standardowego wejścia (stdin) jak z klawiatury." },
    { q: "Podstawy programowania C: Na jakie dwa typy dzielą się pliki w C?", a: "Pliki tekstowe i pliki binarne." },
    { q: "Podstawy programowania C: Jakiego typu wskaźnik obsługuje pliki?", a: "FILE *" },
    { q: "Podstawy programowania C: Jakie dwa argumenty przyjmuje fopen()?", a: "Ścieżkę do pliku i tryb otwarcia (np. \"r\", \"w\")." },
    { q: "Podstawy programowania C: Do czego służy funkcja fclose()?", a: "Zamyka plik i zwalnia zasoby oraz bufor." },
    { q: "Podstawy programowania C: Za co odpowiada funkcja fseek()?", a: "Ustawia wskaźnik pozycji w pliku na wybrane miejsce." },
    { q: "Podstawy programowania C: Co zmienia fseek() wewnątrz pliku?", a: "Bieżącą pozycję odczytu/zapisu (wskaźnik pliku)." },
    { q: "Podstawy programowania C: Jakie funkcje służą do binarnego odczytu/zapisu?", a: "fread() i fwrite()." },
    { q: "Podstawy programowania C: Do czego służy fputs w plikach?", a: "Zapisuje łańcuch znaków do pliku." },
    { q: "Podstawy programowania C: Do czego służy fgets w plikach?", a: "Odczytuje linię tekstu z pliku." },

    // Argumenty Main
    { q: "Podstawy programowania C: Jakie parametry main obsługują argumenty wywołania?", a: "int argc, char *argv[]" },
    { q: "Podstawy programowania C: Co przechowuje parametr argc?", a: "Liczbę argumentów (w tym nazwę programu)." },
    { q: "Podstawy programowania C: Jakiego typu jest parametr argv?", a: "Tablica wskaźników na łańcuchy znaków (argumenty)." },

    // Struktury i Typedef
    { q: "Podstawy programowania C: Czy struktura może posiadać samą siebie jako pole?", a: "Nie, miałaby nieskończony rozmiar." },
    { q: "Podstawy programowania C: Co może posiadać struktura w odniesieniu do samej siebie?", a: "Wskaźnik na ten sam typ struktury (np. w listach)." },
    { q: "Podstawy programowania C: Co daje typedef przed definicją struct?", a: "Pozwala utworzyć alias nazwy typu, pomijając słowo 'struct' przy deklaracji." },
    { q: "Podstawy programowania C: Jak zmienia się deklaracja zmiennej po użyciu typedef?", a: "Piszemy np. 'Student s;' zamiast 'struct Student s;'." },
    { q: "Podstawy programowania C: Dlaczego używa się aliasów dla struktur?", a: "Dla uproszczenia kodu i czytelności." },

    // Klasy pamięci (Register, Static)
    { q: "Podstawy programowania C: Jakie słowo kluczowe definiuje zmienną rejestrową?", a: "register" },
    { q: "Podstawy programowania C: Jaki jest przykładowy zapis zmiennej rejestrowej?", a: "register int i;" },
    { q: "Podstawy programowania C: Jaka jest informacja dla kompilatora przy register?", a: "Sugestia, aby przechowywać zmienną w rejestrze procesora (dla szybkości)." },
    { q: "Podstawy programowania C: Dlaczego oznacza się zmienną jako register?", a: "Dla optymalizacji szybkości dostępu do często używanych zmiennych (np. liczniki)." },
    { q: "Podstawy programowania C: Jakie słowo kluczowe definiuje zmienną statyczną?", a: "static" },
    { q: "Podstawy programowania C: Co dzieje się ze zmienną static po opuszczeniu bloku?", a: "Zmienna nie jest niszczona, pozostaje w pamięci." },
    { q: "Podstawy programowania C: Czy wartość zmiennej statycznej jest tracona między wywołaniami?", a: "Nie, wartość jest zachowywana pomiędzy wywołaniami funkcji." }
];