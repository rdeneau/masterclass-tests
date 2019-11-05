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
    }
}
