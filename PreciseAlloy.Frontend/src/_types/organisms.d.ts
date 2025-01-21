import {BasedAtomicModel} from "@_types/_general";
import {IconModel, LinkModel, LinkWithIconModel, PictureModel} from "@_types/atoms";

interface HeaderModel extends BasedAtomicModel {
  topBar?: LinkWithIconModel;
  logo?: PictureModel;
  links?: LinkModel[];
  hamburgerIcon?: IconModel;
}
