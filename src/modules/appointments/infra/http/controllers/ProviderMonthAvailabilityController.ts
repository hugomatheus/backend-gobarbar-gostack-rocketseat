import { Request, Response } from 'express';
import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';
import { container } from 'tsyringe';

class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { month, year } = request.query;
    const { provider_id } = request.params;

    const listProviderMonthAvailabilityService = container.resolve(
      ListProviderMonthAvailabilityService,
    );
    const availability = await listProviderMonthAvailabilityService.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });
    return response.json(availability);
  }
}

export default ProviderMonthAvailabilityController;
