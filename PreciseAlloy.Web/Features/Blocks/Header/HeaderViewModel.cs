using EPiServer.SpecializedProperties;

namespace PreciseAlloy.Web.Features.Blocks.Header;

public class HeaderViewModel
{
    public virtual Url? TopBarUrl { get; set; }
    public virtual string? TopBarText { get; set; }
    public string? LogoUrl { get; set; }
    public string? RouteUrl { get; set; }
    public LinkItemCollection? Menu { get; set; }
}
