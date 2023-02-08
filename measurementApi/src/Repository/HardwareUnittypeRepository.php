<?php

namespace App\Repository;

use App\Entity\HardwareUnitType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<HardwareUnitType>
 *
 * @method HardwareUnitType|null find($id, $lockMode = null, $lockVersion = null)
 * @method HardwareUnitType|null findOneBy(array $criteria, array $orderBy = null)
 * @method HardwareUnitType[]    findAll()
 * @method HardwareUnitType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HardwareUnittypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HardwareUnitType::class);
    }

    public function save(HardwareUnitType $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(HardwareUnitType $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return HardwareUnitType[] Returns an array of HardwareUnitType objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('h')
//            ->andWhere('h.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('h.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?HardwareUnitType
//    {
//        return $this->createQueryBuilder('h')
//            ->andWhere('h.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
