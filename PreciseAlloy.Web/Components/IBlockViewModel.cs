﻿namespace PreciseAlloy.Web.Components;

public interface IBlockViewModel<out T>
    where T : class
{
    T CurrentBlock { get; }
}
