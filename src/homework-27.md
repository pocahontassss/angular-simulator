Задача №1. Singleton или нет?.
1 экземпляр CounterService будет создан. Из-за providedIn: 'root'.

Задача №2. Локальный Provider
2 экземпляра CounterService будет создано. Из-за
<app-child></app-child> 1 экземпляр
<app-child></app-child> 2 экземпляр

Задача №3. Какой экземпляр получит компонент?
ChildComponent получит из ParentComponent
Потому что ближе в иерархии

Задача №4. useExisting
1 экземпляр LoggerService

Задача №5. useFactory
При первом inject() результат кэшируется

Задача №6. Multi Provider
в value массив всех значений

Задача №7. Optional
вернет NULL если не найдет

Задача №8. Self
Будет искать только в ChildComponent, иначе будет ошибка.

Задача №9. SkipSelf
Пропустит ChildComponent экземпляр ParentComponent.

Задача №10. Нет регистрации
Ошибка

Задача №11. Что произойдет?
1 экземпляр LoggerService
одна ссылка из-за providedIn: 'root'

Задача №12. Финал

1. 2 экземпляр LoggerService существует.
2. Свой экземпляр получит HeaderComponent.
3. root экземпляр получит DashboardComponent.
4. root экземпляр получит UserCardComponent.
5. UserCardComponent > DashboardComponent > AppComponent.

Задача №13. ⭐
Сначала ищет provider для A в корневом инжекторе проверяет кэш > B проверяет кэш > C проверяет кэш
=> D проверяет кэш > LoggerService проверяет кэш > создает LoggerService > создает D > создает C
=> создает B > создает A.

Задача №14. ⭐⭐
1. 0 сервисов
2. 3 объекта объекта сервисов .
Сначала LoggerService, затем ApiService, потом UserService, и кэширует каждый из них.

Задача №15. ⭐⭐⭐

1. ApiService providedIn: 'root'
2. AuthService providedIn: 'root'
3. CartService providedIn: 'root'
4. ProductFilterService providers роутинга
5. NotificationService providedIn: 'root'
6. ThemeService providedIn: 'root'
7. DashboardStatisticsService providers роутинга
8. UserTableStateService providers роутинга
9. ModalService providedIn: 'root'
10. LoggerService InjectionToken + useValue/useFactory.
11. AppConfig InjectionToken
12. CurrencyFormatter providedIn: 'root'
13. AnalyticsService useFactory
