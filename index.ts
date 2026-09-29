import { HomeDepotSearchScraper } from './nodes/HomeDepotSearchScraper/HomeDepotSearchScraper.node';
import { ApifyApi } from './credentials/ApifyApi.credentials';

export const nodeTypes = [HomeDepotSearchScraper];

export const credentialTypes = [ApifyApi];
