import { servicesData } from './treatments/services';
import { coreTreatmentsData } from './treatments/core';
import { restorativeData } from './treatments/restorative';
import { orthoData } from './treatments/ortho';
import { perioData } from './treatments/perio';

export const treatmentsData = {
  ...servicesData,
  ...coreTreatmentsData,
  ...restorativeData,
  ...orthoData,
  ...perioData
};
