---
layout: page
title: "Lab2 Ideas"
description: ""
---

Генерация идей
==============

### Цель:

придумать основную идею решения поставленной задачи

### Методы:

Мозговой штурм, ТРИЗ, метод шести квадратов и любые другие способы генерации идей

![o-W-KMGdtwo.png](images/o-W-KMGdtwo.png)

Применение анти-ТРИЗ
--------------------

#### ПРИЕМ 17: ПРИНЦИП ПЕРЕХОДА В ДРУГОЕ ИЗМЕРЕНИЕ

Большая часть ТРИЗ предполагает ограничение выборки предметной области и ее методов.
При рассмотрении способов компоновки библиотек был замечен принцип data-locality:
добавление книг и чтение происходит либо целиком в онлайне либо на стороне пользователя.

\* особенно в этом отношении лидирует метов использования файловой системы
для категоризации и хранениня литературы (предположительно более 80%)

Был использован метод "ничегонеделания", проблема отложена в сторону пока
рассматривались разные технологии в web для других задач,
случайно была опробована возможность использования статического генератора
сайтов для создания контента. Все что требовалось -- заменить сущность пост
на сущность "книга". Одновременно решилась проблема хранения статических файлов.

Это решение стало отправной точкой в функциональном дизайне, т.к. на рынке
существует более 9000 сервисов(см. раздел конкуренты), использующих мощности
традиционных движков БД, традиционных CMS, кошельки покупателей для создания
огромной облачной инфраструктуры(Apple, Amazon...) - но увлеченным читателям
не хватает этих возможностей.


#### ПРИЕМ xxx: Отказ от ответственности

Нет, речь идет даже не о так называемых "пиратских книгах",
о лицензиях пользователи заботятся самостоятельно.

Решено не плодить безумных инетрфейсов а дать пользователю конструтор,
аналогичный гдавной странице Яндека - пусть сам решает, добавить в верхнюю часть
экрана полки, тэги или древовидные категории.



Результаты мозгового штурма
---------------------------

### Общие принципы:

- _ возможность работы без регистрации
- _ персональная смена css стилей
- _ на сервере хранить только метаинформацию и ссылки юзеров
- _ github для хостинга коллекции
- _ интернационализация
- _ возможность расширения на веб страницы и блоги
- _ Shelves = полки - скопирайтить рабочие решения с goodreads
- _ использовать markdown+yaml для внутреннего хранения и обмена книгами
- _ использовать сочетание ховера и аккордиона для представления списка книг
- _ в раоне логотипа вести статистику по чтению
- _ добавлять ачивки, пока их не запатентовал Микросовт



### добавление новых книг в коллекцию

- _ индексация коллекции на компьютере
- _ интеграция с calibre
- _ открытие файла или drag&&drop
- _ аккаунт dropbox как хранилище
- _ из названия файла(из текста) взять автора и название
- _ спросить пользователя название и вывести suggest с предложением выбрать книгу
- _ подгрузить с амазона информацию и интегрировать в карточку и suggest
 

### поиск нужной книги и организация коллекции
 
- _ каждое издание книги имеет свой id внутри системы, объединяя дубли
- _ по умолчанию юзер видит только то что сам загрузил
- _ при чем если он меняет метаинформацию она отображается только в его аккаунте
- _ система тегов и рейтинга
- _ отслеживание прогресса
- _ древовидная навигация
- _ выбор режима просмотра коллекций
 

### скачивание в нужном формате

- _ html, epub, mobi, fb2 доступны для скачивания прямо из библиотеки
- _ конвертация форматов на стороне сервера в автоматическом режиме
- _ выбор наилучшего варианта
- _ есть возможность перейти на карточку книги и ее редактировать
- _ есть возможность сразу продолжать чтение с главной страницы

### чтение на сайте через браузер

- _ при загрузке сайта сразу переходить к чтению
- _ прямо на сайте из web браузера
- _ режим чтения по страницам
- _ режим браузера со сплошным пролистыванием
- _ поддержка safari reader mode
- _ режим имитации книги
- _ оглавление
- _ подсветка синтаксиса современных ЯП


### прогресс чтения, цитаты и заметки на полях

- _ учитывать реальное время на каждой странице
- _ показывать какие главы прочитаны, а какие остались
- _ заметки ofps лезут на глаза -- надо придумать другой алгоритм


### Чего бы ты хотел в первую очередь видеть в онлайн билиотеке?

- _ важно отслеживаться прогресс чтения
- _ сайт должен открываться на той же книге и странице на которой я остановился
- _ должен поддерживаться личный кабинет с показом прогресса в разных книжках
- _ синхронизация со всеми устройствами


### Какие есть проблемы

PDF -- одна большая проблема, остальные меркнут на фоне

### название

spring

\*bakery (пекарня) -\> bookery боян

\* thebooktree боян

book stop

book port

bay бухта

stork аист

treasure

-jewel

-gem

cognition lib

mine шахта

bookmess

bookcollector

bookstuble

\*bookstork 

pier -- пирс, пристань, причал, мол, эстакада, простенок

book overflow

debook

read cognition

plenty

plantation

mill

plant
 

### логотип

![book-club-book-worm.png](images/book-club-book-worm.png)
\* для старта подойдет

### слоган

creation cognitive book read(их сочетания)


### Где брать книги?

- _ Traum Library (fb2), pdf издания, epub/moby книги.
- _ Предполагаем что пользователь имеет свою домашнюю коллекцию
- _ робот, скачивающий с торрента или libgen.info
- _ у друзей



Прием кражи идей
----------------

Calibre - свободное кроссплатформенное приложение
с открытым исходным кодом.

### Управление библиотекой.
Концепция программы — множество одинаковых книг в разных форматах
представлены как одна книга в библиотеке.
Можно сортировать и искать книги по метаданным таким как: название,
автор, дата издания, дата добавления, размер, серия книг, рейтинг итп.
Также есть поддержка тегов и комментариев и обзоров.

Вы легко можете найти требуемую книгу при помощи простого поиска или
используйте расширенный поиск.

Добавляемые вами книги программа организует в четкую иерархическую
структуру папок на вашем жестком диске, так что даже в отсутствие
программы вы сможет разобраться в вашей библиотеке.

Плюс calibre может искать метаданные о книгах и обложки в интернете по
названию/автору или ISBN. Система поиска метаданных определяется
плагинами и легко может быть расширена самостоятельно

Calibre поддерживает конвертирование из кучи форматов в кучу других.
Input Formats: CBZ, CBR, CBC, EPUB, FB2, HTML, LIT, LRF, MOBI, ODT, PDF,
PRC, PDB, PML, RB, RTF, TCR, TXT\
Output Formats: EPUB, FB2, OEB, LIT, LRF, MOBI, PDB, PML, RB, PDF, TCR, TXT

Конвертирование обладает множеством опций, таких как изменение размера
шрифта, создание структуры книги и сносок итп.

#### Синхронизация с ридерами

Calibre использует модульную систему драйверов для ридеров, которая
позволяет добавлять новые устройства. Сейчас программа поддерживает уже
множество устройств. При синхронизации Calibre сама выбирает наиболее
подходящий формат или если нет нужного — конвертирует в требуемый. Также
добавляет в ридер все нужные метаданные и информацию о сериях книг.

#### Скачивание новостей и конвертация их в книгу

Calibre содержит уже 3 сотни источников новостей. И прочитав мануал, вам
не составит труда добавить новые источники

#### Встроенная читалка для книг

Calibre содержит встроенные программы для чтения всех поддерживаемых форматов книг.

#### Веб-сервер контента

Calibre содержит встроенный веб-сервер для удаленного управления
библиотекой. Также она может скачивать и высылать книги вам по
электронной почте.


### примечание

Веб-сервер контента обладает слабым функционалом, но существует вариант развития
проекта в качестве слияния с веб сервером Calibre.
Можем использовать внутреннее представление OEB в моей библиотеке.




Метод 6 квадратов 
-----------------

К сожалению, все приглашенные гости рисовали пару вариантов на тему:
давайте склонируем амазон. Или пусть категории будут слева, книги справа
и вообще - зачем выдумывать новое?

#### Мой вариант развития событий:

![six_square](images/IMG_0297.jp2)
 

 

 



