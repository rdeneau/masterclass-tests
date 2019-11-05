using System.Linq;
using FluentAssertions;
using Xunit;

namespace Tests
{
    public class EnumerableTests
    {
        [Fact]
        public void Empty_return_no_element()
        {
            var result = Enumerable.Empty<string>();
            result.Should().HaveCount(0);
        }

        [Fact]
        public void Range_generate_sequence_of_integers()
        {
            var result = Enumerable.Range(1, 5);
            result.Should().ContainInOrder(1, 2, 3, 4, 5);
        }

        [Fact]
        public void First_of_integers()
        {
            var integers = Enumerable.Range(1, 5);
            var result = integers.First();
            result.Should().Be(1);
        }

        [Fact]
        public void First_or_default_of_empty_integer_is_zero()
        {
            var integers = Enumerable.Empty<int>();
            var result = integers.FirstOrDefault();
            result.Should().Be(0);
        }

        [Fact]
        public void First_or_default_of_empty_nullable_is_null()
        {
            var integers = Enumerable.Empty<int?>();
            var result = integers.FirstOrDefault();
            result.Should().BeNull();
        }

        [Fact]
        public void Sum_of_integers()
        {
            var integers = Enumerable.Range(1, 5);
            var result = integers.Sum();
            result.Should().Be(1 + 2 + 3 + 4 + 5);
        }

        [Fact]
        public void Where_is_odd_integers()
        {
            var integers = Enumerable.Range(1, 5);
            var result = integers.Where(IsOdd);
            result.Should().BeEquivalentTo(new[] { 1, 3, 5 });
        }

        private static bool IsOdd(int number) =>
            number % 2 == 1;
    }
}
