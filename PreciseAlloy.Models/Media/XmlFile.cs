using EPiServer.DataAnnotations;
using EPiServer.Framework.DataAnnotations;

namespace PreciseAlloy.Models.Media
{
    [ContentType(
        GUID = "C35E5553-90C1-4511-A6C9-64376473D385",
        DisplayName = "XML File",
        Description = "XML media file type. Supports .xml extension.")]
    [MediaDescriptor(ExtensionString = "xml")]
    public class XmlFile : GenericMedia
    {
    }
}