# Розроблення функціональних вимог до системи
У цьому розділі містяться діаграми прецедентів, зокрема загальна та конкретизовані, і діаграми активностей. 
Діаграми було побудовано з урахуванням розроблених характеристик ділових процесів та функціональних вимог, що містяться в [Запитах зацікавлених осіб](./stakeholders-needs.md)

## Короткий зміст
1. [Діаграма use case для всіх бізнес акторів](#GeneralUseCase)
2. [Діаграма use case для користувача](#UserUseCase)
3. [Діаграма use case дослідника](#ResearcherUseCase)
4. [Діаграма use case для експерта](#ExpertUseCase)
5. [Діаграма use case для адміністратора](#AdminUseCase)
6. [Діаграма активності для "Створити акаунт користувача"](#CreateUserAccount)
7. [Діаграма активності для "Редагувати дані акаунта"](#ChangeUserData)
8. [Діаграма активності для "Видалити акаунт користувача"](#RemoveUserAccount)
9. [Діаграма активності для "Створити опитування"](#CreateSurvey)
10. [Діаграма активності для "Закрити опитування"](#CloseSurvey)
11. [Діаграма активності для "Видалити опитування"](#RemoveSurvey)
12. [Діаграма активності для "Отримати аналітику опитування"](#GetSurveyAnalytics)
13. [Діаграма активності для "Показати створені опитування"](#ShowCreatedSurveys)
14. [Діаграма активності для "Пройти опитування"](#TakeSurvey)
15. [Діаграма активності для "Змінити відповіді"](#ChangeAnswer)
16. [Діаграма активності для "Показати пройдені опитування"](#ShowTakenSurveys)

## Діаграми прецедентів бізнес акторів

**Діаграма прецидентів _(діаграма use case_)** - діаграма, що показує різноманітні сценарії взаємодії 
між акторами (користувачами) та прецидентами (випадками використання). [[1]]((https://lvivqaclub.blogspot.com/2008/10/use-case-uml-diagram.html)) [[2]](https://dou.ua/forums/topic/40575/)

<center>
<span id="GeneralUseCase"></span>

### Діаграма use case для всіх бізнес акторів

```plantuml
@startuml

    actor "Користувач" as User #ffed94
    actor "Дослідник" as Researcher #bffaa2
    actor "Експерт" as Expert #eacffa
    actor "Адміністратор системи" as Admin #94f1ff
    
    usecase "Створити акаунт" as UC_1.1
    usecase "Увійти в акаунт" as UC_1.2  
    usecase "Видалити акаунт" as UC_1.3
    usecase "Редагувати дані акаунта" as UC_1.4
    
    usecase "Управляти опитуваннями" as UC_2.1    
    usecase "Отримати аналітику опитування" as UC_2.4
    usecase "Переглянути створені опитування" as UC_2.5
    usecase "Редагувати категорії опитувань" as UC_2.6
    
    usecase "Пройти опитування" as UC_3.1
    usecase "Перегляд опитувань" as UC_3.2
    
    usecase "Дії з акаунтами користувачів" as UC_4.1
    usecase "Зв'язатись з користувачем" as UC_4.2
    usecase "Дії з опитуваннями" as UC_4.3

    User --> UC_1.1
    User --> UC_1.2
    User --> UC_1.3
    User --> UC_1.4
    
    Researcher --|> User 
    Expert --|> User
    Admin --|> User
    
    Researcher --> UC_2.1
    Researcher -up-> UC_2.4
    Researcher -up-> UC_2.5
    Researcher -> UC_2.6
    
    Expert --> UC_3.1
    Expert --> UC_3.2
    
    
    Admin -up-> UC_4.1
    Admin -> UC_4.2
    Admin -up-> UC_4.3
    
    right footer
        Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2024
    end footer

@enduml
```

</center>

<center>
<span id="UserUseCase"></span>

### Діаграма use case для користувача

```plantuml
@startuml
    actor "Користувач" as User #ffed94

    usecase "Створити акаунт" as UC_1.1
    usecase "Увійти в акаунт" as UC_1.2  
    usecase "Видалити акаунт" as UC_1.3
    usecase "Редагувати дані акаунта" as UC_1.4
    
    usecase "Зареєструватись за допомогою пошти" as UC_1.1.1

    usecase "Відновити пароль" as UC_1.2.1
    
    usecase "Підтвердити дію" as UC_1.34.1
    
    usecase "Змінити пароль" as UC_1.4.1
    usecase "Змінити особисті дані" as UC_1.4.2
    
    User -up-> UC_1.1
    User -right-> UC_1.2
    User -down-> UC_1.3
    User -left-> UC_1.4
    
    UC_1.1.1 ..> UC_1.1 :extends
    UC_1.2.1 .left.> UC_1.2 :extends
    UC_1.34.1 <.r. UC_1.3 :includes
    UC_1.34.1 <.up. UC_1.4 :includes
    UC_1.4.1 .right.> UC_1.4 :extends
    UC_1.4.2 ..> UC_1.4 :extends
    
    right footer
        Модель прецедентів користувача.
        НТУУ КПІ ім.І.Сікорського
        Київ-2024
    end footer
    
@enduml
```

</center>

<center>
<span id="ResearcherUseCase"></span>

### Діаграма use case дослідника

```plantuml
@startuml
    actor "Дослідник" as Researcher #bffaa2
    
    usecase "Управляти оптуваннями" as UC_1.1
    
    usecase "Створити опитування" as UC_1.1.1
    usecase "Закрити опитування" as UC_1.1.2
    usecase "Видалити опитування" as UC_1.1.3
    
    usecase "Отримати аналітику опитування" as UC_1.2
    usecase "Переглянути створені опитування" as UC_1.3
    usecase "Редагувати категорії опитувань" as UC_1.4
    
    usecase "Створити питання" as UC_1.1.1.1
    usecase "Додати категорію до опитування" as UC_1.1.1.2
    usecase "Змінити категорію опитування" as UC_1.1.1.3
    
    usecase "Підтверити дію" as UC_1.2.1
    
    usecase "Створити категорію опитувань" as UC_1.4.1
    usecase "Переглянути категорії опитувань" as UC_1.4.2
    
    Researcher -up-> UC_1.1
    Researcher -down-> UC_1.2
    Researcher -left-> UC_1.3
    Researcher -right-> UC_1.4
    
    UC_1.1.1 ..> UC_1.1 :extends
    UC_1.1.2 ..> UC_1.1 :extends
    UC_1.1.3 ..> UC_1.1 :extends
    
    UC_1.1.1.1 ..> UC_1.1.1 :extends
    UC_1.1.1.2 ..> UC_1.1.1 :extends
    UC_1.1.1.3 ..> UC_1.1.1 :extends
    
    UC_1.2.1 <.. UC_1.2 :includes
    UC_1.2.1 <.. UC_1.3 :includes
    
    UC_1.4.1 ..> UC_1.4 :extends
    UC_1.4.2 ..> UC_1.4 :extends
    
    right footer
        Модель прецедентів дослідника.
        НТУУ КПІ ім.І.Сікорського
        Киів-2024
    end footer
    
@enduml
```

</center>

<center>
<span id="ExpertUseCase"></span>

### Діаграма use case для експерта

```plantuml
@startuml
actor "Експерт" as Expert #eacffa

    usecase "Пройти опитування" as UC_1.1
    usecase "Перегляд опитувань" as UC_1.2
    usecase "Обрати категорію експертизи" as UC_1.3
    
    usecase "Завершити опитування" as UC_1.1.1
    usecase "Змінити відповідь" as UC_1.1.2
    
    usecase "Підтвердити дію" as UC_1.1.1.1
    usecase "Зберегти" as UC_1.1.2.1
    
    Expert -left-> UC_1.1
    Expert -right-> UC_1.2
    Expert --> UC_1.3
    
    UC_1.1.1 .up.> UC_1.1 :extends
    UC_1.1.2 ..> UC_1.1 :extends
    
    UC_1.1.1.1 <<. UC_1.1.1 :includes
    UC_1.1.2.1 .>> UC_1.1.2 :extends
        
    right footer
        Модель прецедентів експерта.
        НТУУ КПІ ім. І.Сікорського
        Київ-2024
    end footer

@enduml
```

</center>

<center>
<span id="AdminUseCase"></span>

### Діаграма use case для адміністратора

```plantuml
@startuml
actor "Адміністратор системи" as Admin #94f1ff

    usecase "Зв'язатись з користувачем" as UC_1.1
    usecase "Дії з акаунтами \nкористувачів" as UC_1.2
    usecase "Дії з опитуваннями" as UC_1.3
    
    usecase "Обрати спосіб зв'язку" as UC_1.1.1
    usecase "Відстежити статус \nвідповіді" as UC_1.1.2
    usecase "Надіслати повідомлення" as UC_1.1.3
    
    usecase "Видалити акаунт \nкористувача" as UC_1.2.1
    usecase "Відновити акаунт \nкористувача" as UC_1.2.2
    
    usecase "Видалити опитування" as UC_1.3.1
    usecase "Відновити опитування" as UC_1.3.2
    
    usecase "Підтвердити дію" as UC_1.2.12
    usecase "Підтвердити дію" as UC_1.3.12
    
    Admin -down-> UC_1.1
    Admin -right-> UC_1.2
    Admin -left-> UC_1.3
    
    UC_1.1.1 .up.> UC_1.1 :extends
    UC_1.1.2 .left.> UC_1.1 :extends
    UC_1.1.3 .right.> UC_1.1 :extends
    
    UC_1.2.1 ..> UC_1.2 :extends
    UC_1.2.2 ..> UC_1.2 :extends
    
    UC_1.3.1 ..> UC_1.3 :extends
    UC_1.3.2 ..> UC_1.3 :extends
    
    UC_1.2.12 <.. UC_1.2.1 :includes
    UC_1.2.12 <.. UC_1.2.2 :includes
    
    UC_1.3.12 <.. UC_1.3.1 :includes
    UC_1.3.12 <.. UC_1.3.2 :includes
        
    right footer
        Модель прецедентів адміністратора системи.
        НТУУ КПІ ім. І.Сікорського
        Київ-2024
    end footer

@enduml
```

</center>


## Діаграми діяльностей
**Діаграма діяльності _(activity діаграма)_** - діаграма, що візуалізує процес використання та ілюструє потік повідомлень від 
однієї дії до іншої. [[2]](https://dou.ua/forums/topic/40575/)

<center>
<span id="CreateUserAccount"></span>

### Діаграма діяльності для "Створити акаунт користувача"
| ID  | BUC.01.01                                                                                                                                                                                                                         |
| :------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| НАЗВА | Створити акаунт користувача                                                                                                                                                                                                       |
| УЧАСНИКИ | Користувач, система                                                                                                                                                                                                               |
| ПЕРЕДУМОВИ | Користувач попередньо не має зареєстрованого акаунта в системі MESS.                                                                                                                                                              |
| РЕЗУЛЬТАТ | Новий обліковий запис користувача.                                                                                                                                                                                                |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.01.01 Обліковий запис, зареєстрований за цією поштою, вже існує.<br/>EX.01.02 Не всі обов'язкові дані заповнені.<br/>EX.01.03 Пароль не відповідає вимогам.<br/>EX.01.04 Поля "Пароль" та "Підтвердіть пароль" не збігаються. |


```plantuml
@startuml
|Користувач|
start
skinparam defaultTextAlignment center

|Користувач|
:Користувач натискає на "Зареєструватися";
:Користувач заповнює усі необхідні поля;

|#e6faec|Система|
:Система перевіряє, чи коректно введені дані;
note right #ff8170
EX.01.02
EX.01.03
EX.01.04
end note

:Система перевіряє, чи акаунт з заданою електронною 
поштою ще не існує;
note right #ff8170
EX.01.01
end note

|Користувач|
:Користувач натискає на кнопку "Підтвердити";

|#e6faec|Система|
:Система реєструє **новий обліковий запис користувача**;
:Система під'єднує пристрій до облікового запису; 
:Система перенаправляє на головне вікно;

|Користувач|
:Відображається головне вікно;
stop
@enduml 
```
<span id="ChangeUserData"></span>
### Діаграма діяльності для "Редагувати дані акаунта"


| ID  | BUC.01.02                                                                                                                                                     |
| :------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| НАЗВА | Редагувати дані акаунта                                                                                                                                       |
| УЧАСНИКИ | Користувач, система                                                                                                                                           |
| ПЕРЕДУМОВИ | Користувач має створений обліковий запис та авторизований у системі.                                                                                          |
| РЕЗУЛЬТАТ | Оновлені дані облікового запису.                                                                                                                              |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.01.05 Користувач намагається змінити дані на ті, які не відповідають вимогам.<br/>EX.01.06 Користувач увів неправильний пароль для підтвердження операції. |


```plantuml
@startuml
|Користувач|
start
skinparam defaultTextAlignment center

|Користувач|
:Користувач заходить у профіль;
:Користувач натискає на кнопку "Редагувати дані";

|#e6faec|Система|
:Система підсвічує поля вводу;

|Користувач|
:Користувач оновлює дані в полях, які бажає змінити;

|#e6faec|Система|
:Система пропонує поле вводу пароля;

|Користувач|
:Користувач вводить пароль для підтвердження операції;
:Користувач натискає на кнопку "Підтвердити";

|#e6faec|Система|
:Система перевіряє, чи усі дані відповідають вимогам;
note right #ff8170
EX.01.05
end note
:Система перевіряє, чи правильно введений пароль
для підтвердження операції;
note right #ff8170
EX.01.06
end note

:Система зберігає **оновлені дані облікового запису**;
:Система перенаправляє користувача на вікно з профілем;

|Користувач|
:Користувач відображається у вікні з профілем;
stop
@enduml
```
<span id="RemoveUserAccount"></span>

### Діаграма діяльності для "Видалити акаунт користувача"
| ID  | BUC.01.03                                                                                                     |
| :------------- |:--------------------------------------------------------------------------------------------------------------|
| НАЗВА | Видалити акаунт користувача                                                                                   |
| УЧАСНИКИ | Користувач, система                                                                                           |
| ПЕРЕДУМОВИ | Користувач має створений обліковий запис та авторизований у системі. |
| РЕЗУЛЬТАТ | Видалення облікового запису користувача.                                                                      |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.01.06 Користувач увів неправильний пароль для підтвердження операції.                                      |


```plantuml
@startuml
|Користувач|
start
skinparam defaultTextAlignment center

|Користувач|
:Користувач переходить у профіль;
:Користувач натискає кнопку "Видалити";


|#e6faec|Система|
:Cистема вимагає ввести пароль 
для підтвердження операції;

|Користувач|
:Користувач вводить пароль;

|#e6faec|Система|
:Система перевіряє, чи правильно введено пароль;
note right #ff8170
EX.01.06
end note

|Користувач|
:Користувач натискає кнопку "Підтвердити";

|#e6faec|Система|
:Система видаляє акаунт та пов'язані з ним дані;
:Система перенаправляє користувача на головне вікно;

|Користувач|
:Користувачу відображається головне вікно;

stop
@enduml
```

</center>

<center>
<span id="CreateSurvey"></span>

### Діаграма діяльності для "Створити опитування"

| ID  | BUC.01.04                                                                                                                                                                                                       |
| :------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| НАЗВА | Створити опитування                                                                                                                                                                                             |
| УЧАСНИКИ | Дослідник, система                                                                                                                                                                                              |
| ПЕРЕДУМОВИ | Дослідник вже авторизований у системі.                                                                                                                                        |
| РЕЗУЛЬТАТ | Нове опитування.                                                                                                                                                                                                |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.01.07 Дослідник не заповнив усі поля запитань та варіантів відповідей, що додав.<br/>EX.01.08 Запитання містить однакові варіанти відповідей.<br/>EX.01.09 Дослідник не додав жодного питання до опитування. |

```plantuml
@startuml
|Дослідник|
start
skinparam defaultTextAlignment center
:Переходить на вкладку "Опитування";
:Дослідник натискає на кнопку 
"Створити нове опитування";
|#e6faec|Система|
:Система перенаправляє дослідника 
до вікна створення опитування;
|Дослідник|
:Дослідник додає запитання;
:Дослідник натискає кнопку "Створити";
|#e6faec|Система|
:Система перевіряє, чи коректно 
заповнені дані опитування;
note right #ff8170
EX.01.07
EX.01.08
EX.01.09
end note
:Система створює та 
зберігає **нове опитування**;
:Система перенаправляє дослідника 
на вкладку з активними опитуваннями;
|Дослідник|
:Досліднику відображається вкладка 
з активними опитуваннями;
stop
@enduml
```
<span id="CloseSurvey"></span>

### Діаграма діяльності для "Закрити опитування"

| ID                | BUC.02.01                                                                                                                                                                                   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| НАЗВА             | Закрити опитування                                                                                                                                                                          |
| УЧАСНИКИ          | Дослідник, система                                                                                                                                                                          |
| ПЕРЕДУМОВИ        | Дослідник вже має створене опитування.                                                                                                                               |
| РЕЗУЛЬТАТ         | Закрите опитування (більше не є можливим для проходження).                                                                                                                                  |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.02.01 При запиті "Ви точно бажаєте закрити опитування?" обрати варіант "Ні".<br/>EX.02.02 Швидко натискає кнопку другий раз до того, як запит після першого натискання встиг обробитися. |

```plantuml
@startuml
|Дослідник|
start
skinparam defaultTextAlignment center
:Переходить на вкладку "Активні опитування";
:Знаходить необхідне опитування та 
на ньому натискає кнопку "Закрити";
note right #ff8170
EX.02.02
end note
|#e6faec|Система|
:Система запитує дослідника, 
чи точно бажає закрити опитування;
|Дослідник|
:Дослідник натискає кнопку "Підтвердити";
note right #ff8170
EX.02.01
end note
|#e6faec|Система|
:Система змінює статус опитування із 
активного на **закрите опитування** та не 
дозволяє його проходити;
:Система перенаправляє дослідника на 
вкладку з активними опитуваннями;
|Дослідник|
:Досліднику відображається сторінка
з активними опитуваннями;
stop
@enduml
```
<span id="RemoveSurvey"></span>

### Діаграма діяльності для "Видалити опитування"

| ID  | BUC.02.02                                                                                                                                                                                    |
| :------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| НАЗВА | Видалити опитування                                                                                                                                                                          |
| УЧАСНИКИ | Дослідник, система                                                                                                                                                                           |
| ПЕРЕДУМОВИ | Дослідник вже має закрите опитування.                                                                                                                                |
| РЕЗУЛЬТАТ | Видалення опитування.                                                                                                                                                                        |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.02.02 Швидко натискає кнопку другий раз до того, як запит після першого натискання встиг обробитися.<br/>EX.02.03 При запиті "Ви точно бажаєте видалити опитування?" обрати варіант "Ні". |

```plantuml
@startuml
|Дослідник|
start
skinparam defaultTextAlignment center
:Переходить на вкладку "Закриті опитування";
:Знаходить необхідне опитування 
та на ньому натискає кнопку "Видалити";
note right #ff8170
EX.02.02
end note
|#e6faec|Система|
:Система запитує дослідника, чи точно 
бажає видалити опитування;
|Дослідник|
:Дослідник натискає кнопку "Підтвердити";
note right #ff8170
EX.02.03
end note
|#e6faec|Система|
:Система видаляє опитування та 
усі залежні від нього дані;
:Система перенаправляє дослідника на 
вкладку з закритими опитуваннями;
|Дослідник|
:Досліднику відображається сторінка
з закритими опитуваннями;
stop
@enduml
```

</center>

<center>
<span id="GetSurveyAnalytics"></span>

### Діаграма діяльності для "Отримати аналітику опитування"

| ID  | BUC.03.01                                                                                                    |
| :------------- |:-------------------------------------------------------------------------------------------------------------|
| НАЗВА | Отримати аналітику опитування                                                                                |
| УЧАСНИКИ | Дослідник, система                                                                                           |
| ПЕРЕДУМОВИ | Дослідник вже має створене опитування.                                                                       |
| РЕЗУЛЬТАТ | Аналітика опитування                                                                                         |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.03.01 Багаторазове швидке натискання на кнопку "Аналітика".<br/>EX.03.02 Не вдалося отримати дані з бази. |

```plantuml
@startuml
|Дослідник|
start
skinparam defaultTextAlignment center
:Переходить на вкладку "Опитування";
:Знаходить необхідне опитування 
та на ньому натискає кнопку "Аналітика";
note right #ff8170
EX.03.01
end note
|#e6faec|Система|
:Система робить запит до бази даних;
note right #ff8170
EX.03.02
end note
:Система на основі відповідей експертів 
формує **аналітику опитування**;
note right #ff8170
EX.03.02
end note
:Система повертає аналітику опитування;
|Дослідник|
:Аналітика опитування виводиться на сторінці;
stop
@enduml
```
</center>

<center>
<span id="ShowCreatedSurveys"></span>

### Діаграма діяльності для "Показати створені опитування"

| ID  | BUC.02.03                                                                                                                                                                                                           |
| :------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| НАЗВА | Показати створені опитування                                                                                                                                                                                        |
| УЧАСНИКИ | Дослідник, система                                                                                                                                                                                                  |
| ПЕРЕДУМОВИ | Дослідник вже авторизований у системі.                                                                                                                                                                              |
| РЕЗУЛЬТАТ | Список створених опитувань.                                                                                                                                                                                         |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.02.04 У користувача зник інтернет.<br>EX.02.05 Не вдалося отримати дані з бази. <br>EX.02.06 Запит на створення нового опитування система не встигла обробити, тому щойно створене опитування не відображається. |


```plantuml
@startuml
|Дослідник|
start
skinparam defaultTextAlignment center
:Переходить на вкладку "Опитування";
note right #ff8170
EX.02.04
end note
|#e6faec|Система|
:Система робить запит до бази даних;
note right #ff8170
EX.02.05
end note
:Система формує **список створених опитувань**;
note right #ff8170
EX.02.05
end note
:Система повертає досліднику список створених опитувань;
|Дослідник|
:Опитування відображаються на сторінці;
note right #ff8170
EX.02.04
EX.02.06
end note
stop
@enduml
```

</center>

<center>
<span id="TakeSurvey"></span>

### Діаграма діяльності для "Пройти опитування"
| ID  | BUC.02.04                                                                                                                                                  |
| :------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| НАЗВА | Пройти опитування                                                                                                                                          |
| УЧАСНИКИ | Експерт, система                                                                                                                                           |
| ПЕРЕДУМОВИ | Експерт має бути зареєстрований у системі.                                                                                                                 |
| РЕЗУЛЬТАТ | Відповіді експерта.                                                                                                                                        |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.02.04 У користувача зник інтернет.<br>EX.02.07 Експерт двічі натиснув на кнопку "Почати опитування".<br> EX.02.08 Користувач випадково оновив сторінку. |

```plantuml
@startuml 
skinparam defaultTextAlignment center
|Експерт|
start

:Переходить на вкладку опитування;
note right #ff8170
EX.02.04
EX.02.08
end note
:Натискає кнопку "Почати опитування";
note right #ff8170
EX.02.04
EX.02.07
EX.02.08
end note

|#e6faec|Система|
:Перевіряє доступність опитування;
:Переадресовує експерта на сторінку
з опитуванням;

|Експерт|
:Заповнює опитування;
note right #ff8170
EX.02.04
EX.02.08
end note

|#e6faec|Система|
:Перевіряє чи заповнені поля;

|Експерт|
:Натискає кнопку "Відправити опитування";
note right #ff8170
EX.02.04
EX.02.08
end note

|#e6faec|Система|
:Зберігає **відповіді експерта**;
:Перенаправляє респондента на
сторінку з пройденими опитуваннями;

|Експерт|
:Відображає сторінку з пройденими 
опитуваннями;
note right #ff8170
EX.02.04
end note

stop
@enduml
```

</center>

<center>
<span id="ChangeAnswer"></span>

### Діаграма діяльності для "Змінити відповіді"
| ID  | BUC.02.05                                                              |
| :------------- |:-----------------------------------------------------------------------|
| НАЗВА | Змінити відповіді                                                      |
| УЧАСНИКИ | Експерт, система                                                       |
| ПЕРЕДУМОВИ | Ця можливість повинна бути дозволена автором опитування.               |
| РЕЗУЛЬТАТ | Оновлені відповіді експерта                                            |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.02.04 У користувача зник інтернет.<br> EX.02.08 Користувач випадково оновив сторінку. |

```plantuml
@startuml
skinparam defaultTextAlignment center
|Експерт|
start

:Переходить на сторінку з пройденими опитуваннями;
note right #ff8170
EX.02.04
EX.02.08
end note
:Натискає кнопку "Змінити відповідь";
note right #ff8170
EX.02.04
EX.02.08
end note
if (Чи дозволено 
змінювати відповіді?) then (Так)
  :Вводить нові відповіді;
  note right #ff8170
  EX.02.04
  EX.02.08
  end note
  :Підтверджує зміни;
  note right #ff8170
  EX.02.04
  EX.02.08
  end note
else (Ні)
  :Кнопка неактивна;
  :Не має можливості змінити відповідь;
  stop
endif

|#e6faec|Система|
:Зберігає **оновлені відповіді експерта**;
:Відправляє експерту підтвердження змін;

|Експерт|
:Отримує підтвердження змін;

stop
@enduml
```

</center>

<center>
<span id="ShowTakenSurveys"></span>

### Діаграма діяльності для "Показати пройдені опитування"

| ID  | BUC.02.06                                 |
| :------------- |:------------------------------------------|
| НАЗВА | Показати пройдені опитування              |
| УЧАСНИКИ | Експерт, система                          |
| ПЕРЕДУМОВИ | Експерт авторизований у системі.          |
| РЕЗУЛЬТАТ | Список пройдених опитувань.               |
| ВИКЛЮЧНІ СИТУАЦІЇ | EX.02.05 Не вдалося отримати дані з бази. |

```plantuml
@startuml
|Експерт|
start
skinparam defaultTextAlignment center
:Переходить на сторінку "Пройдені опитування";
|#e6faec|Система|
:Система робить запит до бази даних;
note right #ff8170
EX.02.05
end note
:Система формує **список пройдених опитувань**;
note right #ff8170
EX.02.05
end note
:Повертає експерту список пройдених опитувань;

|Експерт|
:Список пройдених опитувань виводиться на сторінці;
stop
@enduml
```

</center>

## Посилання

1. [Діаграми Прецедентів (Use Case UML Diagram)](https://lvivqaclub.blogspot.com/2008/10/use-case-uml-diagram.html)
2. [Як будувати UML-діаграми. Розбираємо три найпопулярніші варіанти](https://dou.ua/forums/topic/40575/)