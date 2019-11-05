# Tests en C♯

## Exercice

Tester des méthodes LINQ :

- [`Enumerable.Empty()`](https://docs.microsoft.com/fr-fr/dotnet/api/system.linq.enumerable.empty)
- [`Enumerable.Range()`](https://docs.microsoft.com/fr-fr/dotnet/api/system.linq.enumerable.range)
- [`Enumerable.Repeat()`](https://docs.microsoft.com/fr-fr/dotnet/api/system.linq.enumerable.repeat)
- `IEnumerable<T>` extension methods:
  - `First()`, `FirstOrDefault()`, `Single()`...
  - `Max()`, `Sum()`...
  - `OrderBy()`, `Reverse()`...
  - `Select()`, `Where()`...

## Frameworks

- .NET Core 2.2 → cf. `./csharp/Tests/Tests.csproj` > `Project/PropertyGroup/TargetFramework`
- xUnit .NET → `[Fact]`
- [FluentAssertions](https://fluentassertions.com/basicassertions/) → `actual.Should().Be(true)` remplace `Assert.Equal(true, actual)` pour avoir les arguments dans le bon sens (`actual` puis `expected`) et une assertion plus précise (ex : `BeEmpty()`, `HaveLength(2)`...), pour un message d'erreur plus explicite.

## Misc

Plus d'exemples sur la branche `more-examples`.
