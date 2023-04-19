﻿using EPiServer.Core;
using PreciseAlloy.Models.Settings;

namespace PreciseAlloy.Services.Request;

public interface IRequestContext
{
    PageData? CurrentPage();

    bool IsBlockPreviewMode { get; set; }
    
    void SetPageSubstitute(PageData page);
}
