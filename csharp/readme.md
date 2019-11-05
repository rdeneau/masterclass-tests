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
  - `select()`, `Where()`...

## Frameworks

- .NET Core 2.2 → cf. `./csharp/Tests/Tests.csproj` > `Project/PropertyGroup/TargetFramework`
- xUnit .NET → `[Fact]`
- [FluentAssertions](https://fluentassertions.com/basicassertions/) → `.Should().Xxx()`

## Misc

Plus d'exemples sur la branche `more-examples`.
